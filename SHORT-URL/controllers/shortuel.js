const shortid = require('shortid');
const URL = require('../models/url')



async function handleGenerateNewShortUrl(req, res) {
    const body = req.body;
    console.log(body)
    if (!body.url) return res.status(400).json({ error : 'url is required' });

    const shortID = shortid.generate(); 

    
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
        createdBy: req.user._id,
    });

    res.render('home', { id: shortID });
}
async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
}



module.exports = {handleGenerateNewShortUrl, handleGetAnalytics}