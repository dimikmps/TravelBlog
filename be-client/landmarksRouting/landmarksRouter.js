const express = require('express');
const router = express.Router();

// Get landmark by id
router.get('/landmarks/:id', async (req, res) => {
  try {
    const landmarks = Parse.Object.extend('landmarks');
    const query = new Parse.Query(landmarks);
    const queryResult = await query.get(req.params.id);

    return res.status(200).json(queryResult);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Get landmarks (all)
router.get('/landmarks/', async (req, res) => {
  try {
    const landmarks = Parse.Object.extend('landmarks');
    const query = new Parse.Query(landmarks);

    // Get attributes with ascending order
    query.select('objectId', 'title', 'shortInfo', 'location', 'photo', 'photoThumb', 'url');
    query.ascending('order');

    const queryResult = await query.find();
    return res.status(200).json(queryResult);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Put/edit landmark
router.put('/landmark', async (req, res) => {
  // Curent user's session token previously retrieved from within the FE landmarks service (implicitly auth service)
  const sessionToken = req.headers['x-parse-session-token'];

  try {
    const landmarks = Parse.Object.extend('landmarks');
    const query = new Parse.Query(landmarks);
    const queryResult = await query.get(req.body.objectId);

    // TODO: Refine what gets updated / Set required fields or sth?
    queryResult.set('title', req.body.title);
    queryResult.set('description', req.body.description);
    queryResult.set('shortInfo', req.body.shortInfo);
    queryResult.set('url', req.body.url);

    await queryResult.save(null, { sessionToken: sessionToken });

    return res.status(200).json(queryResult);
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  }
});

module.exports = router;
