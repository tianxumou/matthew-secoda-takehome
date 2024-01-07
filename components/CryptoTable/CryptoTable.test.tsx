import { render, screen } from '@/test-utils';
import { CryptoTable } from './CryptoTable';

describe('Crypto Table Component', () => {
  it('has correct CryptoTable component rendering', () => {
    render(<CryptoTable />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
