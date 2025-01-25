const { cmd } = require('../lib/command');

cmd({
    pattern: "repo",
    alias: ["mrlaka", "sc", "github", "botinfo", "info", "deploy", "bot"],
    react: "🌟",
    desc: "Check bot owner.",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        const cap = "Hello Hutto";
        await conn.sendMessage(from, { react: { text: "🌟", key: mek.key } });
        return await conn.sendMessage(from, {
            image: { url: "https://raw.githubusercontent.com/lakaofc/LAKAMD-DATABASE/refs/heads/main/img/laka.jpg" },
            caption: cap
        }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});
