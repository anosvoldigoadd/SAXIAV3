let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('Done Makanya jan main" ama owner:v!')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^(unbanchat|ubnc)$/i
handler.owner = true

export default handler
