-- Bank Accounts Table
CREATE TABLE bank_accounts (
  id VARCHAR(36) PRIMARY KEY,
  bank_id VARCHAR(50) NOT NULL,
  bank_name VARCHAR(100) NOT NULL,
  account_type VARCHAR(50),
  balance DECIMAL(15,2) DEFAULT 0.00,
  last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Categories Table
CREATE TABLE categories (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  type ENUM('EXPENSE', 'REVENUE') NOT NULL,
  parent_id VARCHAR(36),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (parent_id) REFERENCES categories(id)
);

-- Financial Events Table
CREATE TABLE financial_events (
  id VARCHAR(36) PRIMARY KEY,
  type ENUM('EXPENSE', 'REVENUE') NOT NULL,
  description VARCHAR(255),
  amount DECIMAL(15,2) NOT NULL,
  date DATE NOT NULL,
  category_id VARCHAR(36),
  bank_account_id VARCHAR(36),
  status VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id),
  FOREIGN KEY (bank_account_id) REFERENCES bank_accounts(id)
);

-- Value Compositions Table
CREATE TABLE value_compositions (
  id VARCHAR(36) PRIMARY KEY,
  event_id VARCHAR(36) NOT NULL,
  description VARCHAR(255),
  amount DECIMAL(15,2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (event_id) REFERENCES financial_events(id)
);

-- Charge Requests Table
CREATE TABLE charge_requests (
  id VARCHAR(36) PRIMARY KEY,
  event_id VARCHAR(36) NOT NULL,
  due_date DATE NOT NULL,
  installment_number INT,
  total_installments INT,
  status VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (event_id) REFERENCES financial_events(id)
);

-- Create indexes for better query performance
CREATE INDEX idx_financial_events_date ON financial_events(date);
CREATE INDEX idx_financial_events_type ON financial_events(type);
CREATE INDEX idx_categories_type ON categories(type);
CREATE INDEX idx_charge_requests_due_date ON charge_requests(due_date);