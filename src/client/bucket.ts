import { BucketClient } from "bucket-protocol-sdk/src/";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";

// Instantiate SuiClient connected to testnet
const client = new SuiClient({ url: getFullnodeUrl("testnet") });

// Instantiate BucketClient
export const bucket = new BucketClient(client, {
  packageType: "testnet",
});
