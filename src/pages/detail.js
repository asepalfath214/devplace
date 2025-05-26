export function detailPage() {
  return `
    <div class="mx-7 my-32 md:mx-auto max-w-lg">
      <img src="./src/img/foto2.jpg" alt="fotodetail" class="rounded-lg" />
      <div class="mt-5">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-lg text-blue-950 mb-3">DTravel</h3>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-[11px] px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Demo
          </button>
        </div>
        <p class="flex items-center gap-0.5"><ion-icon name="checkmark-sharp" class="text-blue-900"></ion-icon>Free Support</p>
        <p class="flex items-center gap-0.5"><ion-icon name="checkmark-sharp" class="text-blue-900"></ion-icon>Unlimited Domain *</p>
        <p class="flex items-center gap-0.5"><ion-icon name="checkmark-sharp" class="text-blue-900"></ion-icon>Sekali Bayar</p>
        <hr class="mt-3 border-t-2 border-blue-800" />
      </div>
      <div class="mt-7">
        <form class="max-w-sm mx-auto">
          <div class="mb-5">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
            <input
              type="text"
              id="name"
              class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              placeholder="Nama"
              required
            />
          </div>
          <div class="mb-5">
            <label for="nowhatsapp" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No. Whatsapp</label>
            <input
              type="number"
              id="nowhatsapp"
              class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              placeholder="No. Whatsapp"
              required
            />
          </div>
          <div class="mb-5">
            <label for="penwaran" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Penawaran Kamu</label>
            <input
              type="number"
              id="penawaran"
              class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              placeholder="Rp."
              required
            />
          </div>
          <div class="mb-5">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fitur Tambahan</label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tulis Fitur Tambahan ..."
            ></textarea>
          </div>
          <div class="flex justify-between">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-[11px] px-3 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Ajukan Penawaran
            </button>

            <a href="/pembayaran">
              <button
                type="button"
                class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-[11px] px-3 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Tambah Ke Keranjang
              </button>
            </a>
          </div>
        </form>
      </div>
    </div>
    `;
}
