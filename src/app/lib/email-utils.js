const emailSender = async (emails, subject, text, tryCount) => {
    try {
        const { ACCOUNT_ID } = process.env
        const accessToken = await getZohoAccessTokenDB()

        if (!accessToken) {
            throw new Error('No access token received')
        }

        const email = emails.join(',')

        const requestRes = await requestWrapper(
            accessToken,
            email,
            subject,
            text,
            ACCOUNT_ID
        )

        if (!requestRes) {
            if (tryCount >= 2)
                throw new Error('Error, cannot get access token to send email')
            await getZohoAccessToken()
            return await emailSender(emails, subject, text, tryCount + 1)
        }
        return requestRes
    } catch (error) {
        console.error('error catched in emailSender', error)
        throw error
    }
}

async function getZohoAccessToken() {
    const response = await axios.post(
        `https://accounts.zoho.eu/oauth/v2/token?refresh_token=${ZOHO_REFRESH_TOKEN}&grant_type=refresh_token&client_id=${ZOHO_CLIENT_ID}&client_secret=${ZOHO_CLIENT_SECRET}`
    )

    if (response.data.error) {
        throw new Error(`Error fetching access token: ${response.data.error}`)
    }
    const tokenData = response.data.access_token
    if (!tokenData) throw new Error('No access token received')
    await updateZohoAccessTokenDB(tokenData)
}

async function updateZohoAccessTokenDB(access_token) {}
