const fs = require("node:fs");

const content = "Hello Node";

const oldFilePath = "welcome.txt";
const newFilePath = "hello.txt";

fs.writeFile(oldFilePath, content, (err) => {
  if (err) {
    console.error("error creating the file", err);
    return;
  }

  console.log("file created successfully");

  fs.rename(oldFilePath, newFilePath, (err) => {
    if (err) {
      console.error("error creating the file", err);
      return;
    }

    console.log("file renamed successfully");

    fs.readFile("hello.txt", "utf8", (err, data) => {
      if (err) {
        console.error("error reading the data", err);
        return;
      }

      console.log(data);
    });
  });
});
