import HeaderBox from '@/components/HeaderBox';
import RecentTransactions from '@/components/RecentTransactions';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { SearchParamProps, User, Account, Transaction, Bank } from '@/types';

const Dash = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;

  // Datos ficticios de usuario (User)
  const loggedIn: User = {
    $id: "67bf5f0d0010f7c6de65",
    email: "john.doe@example.com",
    userId: "dummy_user_123",
    dwollaCustomerUrl: "https://dummyurl.com",
    dwollaCustomerId: "dummy_dwolla_id",
    firstName: "John",
    lastName: "Doe",
    name: "John Doe",
    address1: "123 Main St",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    dateOfBirth: "1990-01-01",
    ssn: "1234"
  };

  // Datos ficticios de cuentas bancarias (Account)
  const accounts: { data: Account[]; totalBanks: number; totalCurrentBalance: number } = {
    data: [
      {
        id: "acc_001",
        availableBalance: 5000,
        currentBalance: 5200,
        officialName: "Checking Account",
        mask: "1234",
        institutionId: "bank_001",
        name: "Bank of America - Checking",
        type: "depository",
        subtype: "checking",
        appwriteItemId: "appwrite_acc_001",
        shareableId: "shareable_001"
      },
      {
        id: "acc_002",
        availableBalance: 3200,
        currentBalance: 3500,
        officialName: "Savings Account",
        mask: "5678",
        institutionId: "bank_002",
        name: "Wells Fargo - Savings",
        type: "depository",
        subtype: "savings",
        appwriteItemId: "appwrite_acc_002",
        shareableId: "shareable_002"
      }
    ],
    totalBanks: 2,
    totalCurrentBalance: 8700
  };

  const accountsData = accounts.data;
  const appwriteItemId = id as string || accountsData[0]?.appwriteItemId;

  // Datos ficticios de transacciones (Transaction)
  const account: { transactions: Transaction[] } = {
    transactions: [
      {
        id: "tx_001",
        $id: "tx_001",
        name: "Grocery Store",
        paymentChannel: "in_store",
        type: "debit",
        accountId: "acc_001",
        amount: -50,
        pending: false,
        category: "Food and Drink",
        date: "2025-02-20",
        image: "/images/grocery.png",
        $createdAt: "2025-02-20T10:30:00.000Z",
        channel: "POS",
        senderBankId: "bank_001",
        receiverBankId: "merchant_001"
      },
      {
        id: "tx_002",
        $id: "tx_002",
        name: "Coffee Shop",
        paymentChannel: "in_store",
        type: "debit",
        accountId: "acc_001",
        amount: -20,
        pending: false,
        category: "Food and Drink",
        date: "2025-02-22",
        image: "/images/coffee.png",
        $createdAt: "2025-02-22T14:45:00.000Z",
        channel: "POS",
        senderBankId: "bank_001",
        receiverBankId: "merchant_002"
      },
      {
        id: "tx_003",
        $id: "tx_003",
        name: "Freelance Payment",
        paymentChannel: "online",
        type: "credit",
        accountId: "acc_002",
        amount: 150,
        pending: false,
        category: "Transfer",
        date: "2025-02-25",
        image: "/images/payment.png",
        $createdAt: "2025-02-25T16:00:00.000Z",
        channel: "ACH",
        senderBankId: "client_001",
        receiverBankId: "bank_002"
      }
    ]
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={accountsData}
            totalBanks={accounts.totalBanks}
            totalCurrentBalance={accounts.totalCurrentBalance}
          />
        </header>

        <RecentTransactions 
          accounts={accountsData}
          transactions={account.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={account.transactions}
        banks={accountsData}
      />
    </section>
  );
};

export default Dash;
