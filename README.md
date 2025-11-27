# VeriNews AI: Fake News Detection System

![Project Status](https://img.shields.io/badge/Status-Prototype-blue)
![Accuracy](https://img.shields.io/badge/Model_Accuracy-98.9%25-green)

**VeriNews AI** is a web application designed to automatically identify fake news (hoaxes) using Natural Language Processing (NLP) and Machine Learning techniques.

This project serves as a digital implementation of our research titled *"Utilization of Natural Language Processing (NLP) for Hoax Identification in Online News Articles"* , where we compared classic algorithms to find the most effective solution for hoax detection.

## 📄 Research Insights

The spread of disinformation is a critical challenge in the digital era. Our study analyzed the performance of three major classification models using a public dataset from Kaggle labeled as "Hoax" and "Real" .

### Model Performance
Based on our experimental results, the **Random Forest** algorithm outperformed others, making it the core engine of this detection system .

| Model | Accuracy | Precision | Recall | F1-Score |
| :--- | :--- | :--- | :--- | :--- |
| **Random Forest** | **98.90%** | **99.00%** | **98.80%** | **98.90%** |
| Naive Bayes | 95.87% | 95.23% | 96.80% | 96.01% |
| SVM | 92.15% | 91.80% | 92.50% | 92.10% |

*Data Source: Table 1 of the Research Journal *

## 🛠️ Technologies Used

This project is built with:

- **Vite** (Build tool)
- **TypeScript** (Language)
- **React** (Frontend Framework)
- **shadcn-ui** (UI Component Library)
- **Tailwind CSS** (Styling)

*Note: The underlying logic for the text analysis is based on Python scikit-learn libraries (TF-IDF Vectorizer & Random Forest Classifier) as detailed in the research methodology .*

## ✨ Key Features

1.  **Instant Analysis**: Input news text to classify it as "Hoax" or "Fact" in real-time.
2.  **Evidence-Based**: Displays the confidence score of the prediction (e.g., 98.9% probability).
3.  **Modern UI**: Clean and responsive interface built with Shadcn UI and Tailwind.

## 🚀 How to Run the Project

Follow these steps to run the application locally:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies
npm i

# Step 4: Start the development server
npm run dev