const { db } = require("./connect");
const { PutCommand } = require("@aws-sdk/lib-dynamodb");
const { cosmicItems } = require("../data/cosmic");
const { atomicItems } = require("../data/atomic");
const { dnaItems } = require("../data/dna");

const allItems = [...cosmicItems, ...atomicItems, ...dnaItems];

async function seedDatabase() {
  console.log("Starting to seed your cosmic database...\n");

  for (const item of allItems) {
    await db.send(
      new PutCommand({
        TableName: "genomic-cosmos",
        Item: item,
      })
    );
    console.log(`Saved: [${item.PK}] ${item.SK}`);
  }

  console.log("\nDone! Your cosmic data is now live in DynamoDB.");
}

seedDatabase().catch(console.error);
