const { writeRealtime } = require("../../common/firebase");

class RealtimeController {
  // [POST] /write
  async write(req, res) {
    try {
      const data = req.body;
      await writeRealtime("aaa", {
        data: "kkk",
      });
      res.status(200).json({ message: "write successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Center creation failed" });
    }
  }
}

module.exports = new RealtimeController();
