export function pembayaranPage() {
  return `
    <div class="bg-gradient-to-b from-blue-800 to-blue-950 w-full mt-16 h-30 md:h-50">
      <h1 class="text-white font-bold text-center pt-11 text-4xl md:text-7xl md:pt-16">Pembayaran</h1>
    </div>

    <div class="mx-7 my-12 md:mx-auto max-w-lg">
      <div class="bg-white p-3 border-1 border-gray-200 rounded-lg mb-3">
        <div class="flex items-center justify-between mb-3">
          <p class="font-bold">Product:</p>
          <p class="text-blue-800 font-bold">Dtravel</p>
        </div>
        <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
        <div class="flex items-center justify-between mb-3">
          <p class="font-bold">Harga:</p>
          <p>Rp.1.000.000</p>
        </div>
        <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
        <div class="flex items-center justify-between mb-3">
          <p class="font-bold">Diskon:</p>
          <p class="font-bold">Rp.500.000</p>
        </div>
        <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
        <div class="flex">
          <button class="inline-flex items-center px-3 text-sm text-white bg-blue-500 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">Terapkan</button>
          <input
            type="text"
            id="website-admin"
            class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Masukkan Kode Promo"
          />
        </div>
      </div>

      <div class="bg-blue-50 p-3 border-gray-200 rounded-lg mb-3">
        <div class="flex items-center justify-between">
          <p class="font-bold">Total:</p>
          <p class="text-blue-600 font-semibold">Rp.500.000</p>
        </div>
      </div>
      <button
        type="button"
        class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-3 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Bayar
      </button>
    </div>
    `;
}
