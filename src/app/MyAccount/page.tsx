"use client";

import React from 'react';
import { PlaidLinkOnSuccess, PlaidLink, PlaidLinkError, PlaidLinkOnExitMetadata } from 'react-plaid-link';

const MyAccount = () => {
  const onSuccess: PlaidLinkOnSuccess = (public_token: string, metadata: any) => {
    console.log('Public Token:', public_token);
    console.log('Metadata:', metadata);
  };

  return (
    <div>
      <h1>Link your bank account</h1>
      <PlaidLink
        publicKey="your_public_key"
        clientName="Your App Name"
        product={['auth', 'transactions']}
        env="sandbox"
        onSuccess={onSuccess}
        onExit={(error: PlaidLinkError | null, metadata: PlaidLinkOnExitMetadata) => {
          console.log('Exited Plaid Link:', error, metadata);
        }}
      >
        <button>Link Bank Account</button> 
      </PlaidLink>
    </div>
  );
};

export default MyAccount;

