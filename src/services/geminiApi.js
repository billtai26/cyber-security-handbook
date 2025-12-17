import { GoogleGenerativeAI } from '@google/generative-ai'

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY

export const generateCyberQuestion = async () => {
  // Thêm dòng này để kiểm tra (nhớ xóa đi sau khi sửa xong để bảo mật)
  console.log('Current Key:', import.meta.env.VITE_GEMINI_API_KEY)
  if (!API_KEY) {
    console.error('Chưa cấu hình VITE_GEMINI_API_KEY')
    return null
  }

  try {
    const genAI = new GoogleGenerativeAI(API_KEY)
    // Sử dụng model flash cho nhanh và tiết kiệm
    // Đổi sang 'gemini-pro' để đảm bảo chạy được
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

    const prompt = `
      Bạn là chuyên gia an ninh mạng. Hãy tạo 1 câu hỏi trắc nghiệm thực tế về: Phishing, Mật khẩu, Wifi công cộng, hoặc Mã độc.
      Yêu cầu trả về định dạng JSON duy nhất (không markdown) gồm:
      {
        "scenario": "Mô tả tình huống ngắn gọn (Ví dụ: Nhận được email...)",
        "type": "Chủ đề (Ví dụ: Lừa đảo)",
        "answer": "Đáp án đúng và lời khuyên",
        "explanation": "Giải thích tại sao lại như vậy"
      }
      Chỉ trả về JSON, không thêm lời dẫn.
    `

    const result = await model.generateContent(prompt)
    const response = result.response
    const text = response.text()

    // Làm sạch chuỗi JSON (đôi khi AI thêm ```json ở đầu)
    const cleanedText = text.replace(/```json|```/g, '').trim()

    return JSON.parse(cleanedText)

  } catch (error) {
    console.error('Lỗi gọi Gemini:', error)
    return null
  }
}
