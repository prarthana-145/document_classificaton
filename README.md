# 📄 Financial Document Classifier

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

A full-stack web application that uses a deep learning model to classify uploaded images into one of four categories: **cheque**, **payslip**, **receipt**, or **tax**.

---

## ✨ Features

-   🖼️ **Upload an image** of a financial document through a clean web interface.
-   🧠 **Instantly classify** the document using a fine-tuned ResNet50 model.
-   🚀 **Fast & Responsive Backend** powered by FastAPI.
-   ⚛️ **Interactive Frontend** built with React.

---

## 🛠️ Tech Stack

### Backend
* **Python**
* **FastAPI**: For the high-performance API.
* **PyTorch**: To load and run the deep learning model.
* **Torchvision**: For the ResNet50 model architecture.
* **Uvicorn**: As the ASGI server to run FastAPI.

### Frontend
* **React.js**: For the user interface.
* **JavaScript**
* **CSS**

---

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed:
* Python (3.8+)
* Node.js and npm

### ⚠️ Important: Download the Model File

The trained model file (`best_model.pt`) is not included in this repository due to its size. You need to download it separately and place it in the root directory of the project.

**[➡️ Download the `best_model.pt` file from here](https://drive.google.com/file/d/15b7xurcHdTHntdZYc1W0NGFcx0qdcdJm/view?usp=sharing)**

*(Note: You'll need to replace the link above with a public link to your model file, e.g., from Google Drive or Dropbox.)*

### Installation & Setup

The project requires running the backend and frontend servers in two separate terminals.

**1. Clone the repository:**
```sh
git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
cd your-repository-name
