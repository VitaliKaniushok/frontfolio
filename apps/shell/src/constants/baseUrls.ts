export const baseUrls: Record<string, string> = {
  devfolio_portfolio:
    process.env.NEXT_PUBLIC_PORTFOLIO_URL ?? "http://localhost/portfolio",
  // other remotes can be added here as needed
};
