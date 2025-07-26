import io
import torch
from fastapi import FastAPI, File, UploadFile
from PIL import Image
from torchvision import transforms, models

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)


# 1) Transform pipeline (must match training)
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Lambda(lambda x: x / 255.0),
    transforms.Normalize(mean=[0.485,0.456,0.406],
                         std=[0.229,0.224,0.225]),
])

# 2) Load model on startup
@app.on_event("startup")
def load_model():
    global clf_model, device, class_names
    device = torch.device("cpu")
    clf_model = models.resnet50()  # same as training
    clf_model.fc = torch.nn.Linear(clf_model.fc.in_features, 4)
    clf_model.load_state_dict(torch.load("best_model.pt", map_location=device))
    clf_model.eval()
    clf_model.to(device)
    class_names = [' cheque', ' payslip', ' receipt', ' tax']

# 3) Inference helper
def clf_predict(img: Image.Image) -> str:
    x = transform(img).unsqueeze(0).to(device)
    with torch.no_grad():
        logits = clf_model(x)
    idx = logits.argmax(dim=1).item()
    return class_names[idx]

# 4) /classify endpoint
@app.post("/classify")
async def classify(file: UploadFile = File(...)):
    content = await file.read()
    img = Image.open(io.BytesIO(content)).convert("RGB")
    label = clf_predict(img)
    return {"document_type": label}

# 5) To run: uvicorn app:app --reload --port 8000
