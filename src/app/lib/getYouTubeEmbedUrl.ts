export default function getYouTubeEmbedUrl(url: string): string {
    console.log('url', url)
    if (!url) return ''

    const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = url.match(regExp)
    if (match && match[2].length === 11) {
        const videoId = match[2]
        console.log('videoId', videoId)
        return `https://youtube.com/embed/${videoId}`
    }

    return url
}
