import { supabase } from '@/lib/supabase';

export async function setupDatabase() {
  // Create bank_accounts table
  const { error: bankAccountsError } = await supabase.rpc('create_bank_accounts_table');
  if (bankAccountsError) console.error('Error creating bank_accounts table:', bankAccountsError);

  // Create categories table
  const { error: categoriesError } = await supabase.rpc('create_categories_table');
  if (categoriesError) console.error('Error creating categories table:', categoriesError);

  // Create financial_events table
  const { error: eventsError } = await supabase.rpc('create_financial_events_table');
  if (eventsError) console.error('Error creating financial_events table:', eventsError);

  // Create value_compositions table
  const { error: compositionsError } = await supabase.rpc('create_value_compositions_table');
  if (compositionsError) console.error('Error creating value_compositions table:', compositionsError);

  // Create charge_requests table
  const { error: chargeRequestsError } = await supabase.rpc('create_charge_requests_table');
  if (chargeRequestsError) console.error('Error creating charge_requests table:', chargeRequestsError);
}