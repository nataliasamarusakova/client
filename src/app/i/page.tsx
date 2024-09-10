"use client";

import { useState } from "react";
import { useGetAccounts } from "@/src/hooks/useGetAccount";
import { useShowTask } from "@/src/hooks/useShowTask";  
import SettingsForm from "@/src/components/Settings/Settings";
import AddAccountForm from "@/src/components/AddAccountForm/AddAccountForm";
import AccountList from "@/src/components/AccountList/AccountList";
import AddFunctionForm from "@/src/components/AddFunctionsForm/AddFunctionForm";

export default function Page() {

  const { accounts, isLoadingAccounts } = useGetAccounts();
  const { selectId, formRef, showFunctionsForm, handleAddTask, setFunctionsForm } = useShowTask();

  const [showSettingsForm, setShowSettingsForm] = useState(false);
  const [addAccountForm, setShowAccountForm] = useState(false);

  const selectAccount = accounts?.find((account) => account.id == selectId)

  return <>

    {addAccountForm && <AddAccountForm setShowAccountForm={setShowAccountForm} />}
    {showSettingsForm && <SettingsForm setShowSettingsForm={setShowSettingsForm} />}
    {showFunctionsForm && <AddFunctionForm formRef={formRef} selectAccount={selectAccount} setFunctions={setFunctionsForm} />}

    {
      accounts && <AccountList accounts={accounts} isLoadingAccounts={isLoadingAccounts} handleAddTask={handleAddTask} setShowAccountForm={setShowAccountForm} setShowSettingsForm={setShowSettingsForm} />
    }

  </>;
}