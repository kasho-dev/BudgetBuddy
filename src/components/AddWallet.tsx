import { useEffect, useState } from 'react'

function AddWallet() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [walletName, setWalletName] = useState("")
  const [initialBalance, setInitialBalance] = useState("")

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    // play exit animation then unmount
    setIsVisible(false)
    setTimeout(() => setIsOpen(false), 200)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // In a real app, persist the wallet here
    console.log("Creating wallet", { walletName, initialBalance })
    setWalletName("")
    setInitialBalance("")
    closeModal()
  }

  useEffect(() => {
    if (isOpen) {
      // allow the panel to mount before turning visible for enter animation
      const id = requestAnimationFrame(() => setIsVisible(true))
      return () => cancelAnimationFrame(id)
    }
  }, [isOpen])

  return (
    <div>
      <button onClick={openModal} className="border bg-[#FFFFFF] text-black p-1 font-semibold rounded-md transition-all hover:bg-white/90 hover:shadow active:scale-95">
        Add Wallet
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50 transition-opacity duration-200" style={{ opacity: isVisible ? 1 : 0 }} onClick={closeModal}></div>
          <div className="absolute inset-0 flex items-center justify-center p-4" onClick={closeModal}>
            <div
              className="w-full max-w-md rounded-lg bg-[#1F2125] p-6 shadow-lg transition-all duration-200 ease-out"
              style={{ transform: isVisible ? 'scale(1)' : 'scale(0.97)', opacity: isVisible ? 1 : 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">Add Wallet</h2>
                <button onClick={closeModal} className="text-white/70 hover:text-white">✕</button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm text-white/80">Wallet Name</label>
                  <input
                    value={walletName}
                    onChange={(e) => setWalletName(e.target.value)}
                    placeholder="e.g. Main Wallet"
                    className="w-full rounded-md border border-white/10 bg-[#2A2D33] p-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-white/80">Initial Balance</label>
                  <input
                    type="number"
                    inputMode="decimal"
                    value={initialBalance}
                    onChange={(e) => setInitialBalance(e.target.value)}
                    placeholder="0.00"
                    className="w-full rounded-md border border-white/10 bg-[#2A2D33] p-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
                <div className="mt-6 flex justify-end gap-2">
                  <button type="button" onClick={closeModal} className="rounded-md border border-white/10 px-3 py-2 text-white transition-colors hover:bg-white/10">Cancel</button>
                  <button type="submit" className="rounded-md bg-white px-3 py-2 font-semibold text-black transition-all hover:bg-white/90 active:scale-95">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddWallet;
