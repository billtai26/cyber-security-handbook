import { useState } from 'react'
import { Container, Typography, Button, Card, CardContent, Chip } from '@mui/material'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import { generateCyberQuestion } from '../services/geminiApi' // Import hàm vừa viết

const CyberQuiz = () => {
  const [question, setQuestion] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)

  // const generateQuestion = async () => {
  //   setLoading(true)
  //   setShowAnswer(false)

  //   // --- KHU VỰC GỌI GEMINI API (Sẽ thay thế bằng code thật) ---
  //   // Mô phỏng request tới Gemini
  //   setTimeout(() => {
  //     setQuestion({
  //       scenario: 'Bạn nhận được email từ \'Faceb00k Support\' yêu cầu đổi mật khẩu vì tài khoản bị khóa, kèm theo đường link \'facebook-security-check.com\'. Bạn nên làm gì?',
  //       type: 'Phishing (Lừa đảo)',
  //       answer: 'Đây là email lừa đảo (Phishing).',
  //       explanation: '1. Tên người gửi \'Faceb00k\' sai chính tả. 2. Đường link không phải \'facebook.com\'. KHÔNG ĐƯỢC nhấn vào link.'
  //     })
  //     setLoading(false)
  //   }, 1000)
  //   // ---------------------------------------------------------
  // }

  const handleGenerateQuestion = async () => {
    setLoading(true)
    setShowAnswer(false)
    setQuestion(null) // Reset câu hỏi cũ

    const result = await generateCyberQuestion()

    if (result) {
      setQuestion(result)
    } else {
      alert('Có lỗi khi gọi AI, vui lòng thử lại sau!')
    }
    setLoading(false)
  }

  return (
    <Container maxWidth="md" className="py-10">
      <div className="flex items-center gap-3 mb-6">
        <SmartToyIcon fontSize="large" className="text-purple-600"/>
        <Typography variant="h4" className="font-bold text-slate-800">
          Luyện tập với AI
        </Typography>
      </div>

      <Button
        variant="contained"
        onClick={handleGenerateQuestion}
        disabled={loading}
        className="bg-purple-600 hover:bg-purple-700 mb-8"
      >
        {loading ? 'AI đang suy nghĩ...' : 'Tạo tình huống mới'}
      </Button>

      {question && (
        <Card className="border-t-4 border-purple-500 shadow-xl">
          <CardContent className="space-y-4">
            <Chip label={question.type} color="warning" />
            <Typography variant="h6" className="font-serif">
              "{question.scenario}"
            </Typography>

            <div className="pt-4">
              {!showAnswer ? (
                <Button variant="outlined" onClick={() => setShowAnswer(true)}>
                  Xem đáp án
                </Button>
              ) : (
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <Typography variant="subtitle1" className="font-bold text-green-800">
                    {question.answer}
                  </Typography>
                  <Typography variant="body2" className="text-slate-600 mt-2">
                    Giải thích: {question.explanation}
                  </Typography>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </Container>
  )
}

export default CyberQuiz
