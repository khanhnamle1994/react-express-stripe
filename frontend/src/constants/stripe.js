const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_3mTRkAi7SFVJd57TNvkKJMmt'
  : 'sk_test_1xu7Wxk4EU9Ua1L5x5tF8Ktl';

export default STRIPE_PUBLISHABLE;
