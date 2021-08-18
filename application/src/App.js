module.exports = class App {
  constructor(options) {
    this.options = options;
    this.payloadSize = null;
    this.chunks = [];
  }

  sizeHasBeenRead() {
    return Boolean(this.payloadSize);
  }

  flushChunksQueue() {
    this.payloadSize = null;
    this.chunks.splice(0);
  };
  
  readMessage() {
    const stringData = Buffer.concat(this.chunks);
  
    if (!sizeHasBeenRead()) {
      this.payloadSize = stringData.readUInt32LE(0);
    }
  
    if (stringData.length >= (this.payloadSize + 4)) {
      const contentWithoutSize = stringData.slice(4, (this.payloadSize + 4));
  
      flushChunksQueue();
  
      const json = JSON.parse(contentWithoutSize);
  
      handleMessage(json);
    }
  };

  handleMessage(message = {}) {
    if (message.body === "ping") {
      sendMessage({
        body: "pong"
      });
    } else sendMessage({
      body: "IDK"
    });
  }
  
  sendMessage(message = {}) {
    const header = Buffer.alloc(4);
  
    message = JSON.stringify(message);
    header.writeUInt32LE(message.length, 0);
  
    process.stdout.write(header);
    process.stdout.write(message);
  }
}