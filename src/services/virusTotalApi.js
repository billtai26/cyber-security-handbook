const API_KEY = import.meta.env.VITE_VIRUSTOTAL_API_KEY

export const checkUrlSafety = async (urlToCheck) => {
  if (!API_KEY) return null

  try {
    // Bước 1: Mã hóa URL sang Base64 (Chuẩn của VirusTotal)
    // VirusTotal yêu cầu URL phải được mã hóa base64 không có padding '='
    const urlId = btoa(urlToCheck).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

    // Bước 2: Gọi API qua Proxy để tránh lỗi CORS
    // Mẹo: Dùng corsproxy.io chèn vào trước link API
    const proxyUrl = '[https://corsproxy.io/](https://corsproxy.io/)?'
    const targetUrl = `https://www.virustotal.com/api/v3/urls/${urlId}`

    const response = await fetch(proxyUrl + encodeURIComponent(targetUrl), {
      method: 'GET',
      headers: {
        'x-apikey': API_KEY,
        'Accept': 'application/json'
      }
    })

    if (!response.ok) {
      // Nếu URL chưa từng được quét, VirusTotal sẽ trả về 404
      if (response.status === 404) {
        return {
          safe: true,
          message: 'Chưa có dữ liệu về trang này',
          details: 'Hệ thống chưa từng quét trang này. Hãy cực kỳ cẩn thận trước khi truy cập!'
        }
      }
      throw new Error('Lỗi kết nối API')
    }

    const data = await response.json()
    const stats = data.data.attributes.last_analysis_stats

    // Đếm số lượng cảnh báo
    const malicious = stats.malicious + stats.suspicious

    return {
      safe: malicious === 0,
      message: malicious > 0
        ? `CẢNH BÁO: Phát hiện ${malicious} mối đe dọa!`
        : 'AN TOÀN: Các công cụ bảo mật đánh giá tốt.',
      details: `Độc hại: ${stats.malicious} | Nghi ngờ: ${stats.suspicious} | Sạch: ${stats.harmless}`
    }

  } catch (error) {
    console.error('Lỗi VirusTotal:', error)
    return {
      safe: false,
      message: 'Lỗi kiểm tra',
      details: 'Không thể kết nối đến server hoặc URL không hợp lệ.'
    }
  }
}
