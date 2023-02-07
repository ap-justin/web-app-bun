interface TxError extends Error {
  chainId: string;
  txHash: string;
}

export class LogDonationFail extends Error implements TxError {
  chainId: string;
  txHash: string;
  constructor(chainId: string, txHash: string) {
    super(
      "Failed to log your donation for receipt purposes. Kindly send an email to support@angelprotocol.io"
    );
    this.chainId = chainId;
    this.txHash = txHash;
    this.name = "LogDonationFail";
  }
}

export class BroadcastFail extends Error {
  reason: string;
  constructor(reason: string) {
    super("Failed to broadcast transaction");
    this.name = "CustomBroadcastFail";
    this.reason = reason;
  }
}

export class TxFail extends Error implements TxError {
  chainId: string;
  txHash: string;
  reason: string;
  constructor(reason: string, chainId: string, txHash: string) {
    super("Transaction was submitted but failed");
    this.name = "CustomTxFail";
    this.reason = reason;
    this.chainId = chainId;
    this.txHash = txHash;
  }
}
