# **FAQ Management System - Node.js & Express**

A full-stack FAQ management system built using **Node.js**, **Express.js**, **MongoDB**, **Redis**, and **i18n** support. The system allows for **CRUD operations** on FAQs, caching with Redis, and language translation for FAQ questions, offering a seamless user experience.

## **Features**

- **FAQ Management**: Easily create, read, update, and delete FAQs via RESTful APIs.
- **Multi-language Support**: FAQs are translated based on the user's language preference.
- **Caching**: FAQ data is cached in Redis for faster access, reducing database load.
- **Search**: Allows searching of FAQs based on question text.
- **Translation**: Automatic translation for FAQs using third-party APIs (Google Translate or similar).
- **Error Handling**: Robust error handling in both the server and client-side.

## **Tech Stack**

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose for data modeling)
- **Caching**: Redis (ioredis for efficient caching)
- **Translation**: Custom translation service using third-party translation APIs
- **Environment Variables**: dotenv (for secure management of sensitive keys)

## **Setup Instructions**

To get the project up and running, follow the instructions below:

### 1. Clone this repository:
```bash
git clone https://github.com/yourusername/faq-management.git
cd faq-management

2. Install dependencies:
```bash
npm install

3. Setup environment variables:

MONGO_URI=
UPSTASH_REDIS_URL=
CORS_ORIGIN= 
GOOGLE_TRANSLATE_API_KEY=

4. Run the application:
npm run dev

API Usage Examples

1. Get FAQs
Endpoint: GET /api/faqs/get-faqs

Example Request (English FAQs):
curl -X GET "http://localhost:5000/api/faqs/get-faqs?lang=en"

Example Response:
[
  {
    "question": "What is Node.js?",
    "answer": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine."
  },
  {
    "question": "How does caching work?",
    "answer": "We use Redis to cache the FAQ data for faster retrieval."
  }
]

2. Create FAQ
Endpoint: POST /api/faqs/create-faq

 POST "http://localhost:5000/api/faqs/create-faq" \
  -H "Content-Type: application/json" \
  -d '{"question": "What is Express.js?", "answer": "Express.js is a web application framework for Node.js."}'

Example Response:
{
  "question": "What is Express.js?",
  "answer": "Express.js is a web application framework for Node.js.",
  "_id": "60d2f2d945bfe226e742e1f5"
}

3. Update FAQ
Endpoint: PUT /api/faqs/update-faq/:id

 PUT "http://localhost:5000/api/faqs/update-faq/60d2f2d945bfe226e742e1f5" \
  -H "Content-Type: application/json" \
  -d '{"question": "What is Express.js?", "answer": "Express.js is a minimalist web framework for Node.js."}'

Example Response:
{
  "question": "What is Express.js?",
  "answer": "Express.js is a minimalist web framework for Node.js.",
  "_id": "60d2f2d945bfe226e742e1f5"
}

4. Delete FAQ
Endpoint: DELETE /api/faqs/delete-faq/:id

DELETE "http://localhost:5000/api/faqs/delete-faq/60d2f2d945bfe226e742e1f5"

Example Response:
{
  "message": "FAQ deleted successfully"
}

Contribution Guidelines


We welcome contributions to improve this project! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Make your changes and commit them (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature/your-feature).
5. Create a pull request and describe your changes.