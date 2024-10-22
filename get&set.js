// soal 1

// class person{
//     constructor(firstname, lastname, age){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;
// }
// get name(){
//     return this.firstname, this.lastname;
// }
// set name(value){
//     if (value.length == 0){
//         console.log("nama tidak boleh kosong");
//     } else {
//         this.firstname = value;
//         this.lastname = value;
//     }
// }
// set setage(value){
//     if (value < 0){
//         console.log("umur tidak boleh kurang dari 0");
//     } else {
//         this.age = value;
//     }
// }
// get getage(){
//     return this.age;
// }

// }
// const ang = new person("angga","buana","55");
// ang.name='' 
// ang.setage='9'
// console.info(ang);

// soal 2

// class PersegiPanjang {
//     constructor() {
//     this.panjang;
//     this.lebar;
// }

//     get getpanjang() {
//         return this.panjang;
//     }


//     set setpanjang(panjang) {
//         if (panjang <= 0) {
//             console.log("Panjang tidak boleh 0");
//         }else{
//             this.panjang = panjang;
//     }
// }
    
//     get getlebar() {
//         return this.lebar;
//     }

//     set setlebar(lebar){
//         if(lebar <= 0){
//             console.log("lebar tidak boleh kurang dari 0");
//         }else{
//             this.lebar = lebar;
//         }
//     }
//     luas () {
//          return ( this.panjang * this.lebar);
//     }

//     keliling(){
//       return (2 * (this.panjang + this.lebar));
//     }
// }

// let persegiPanjang = new PersegiPanjang();
//     persegiPanjang.setpanjang = 9;
//     persegiPanjang.setlebar = 10;
//     console.log(persegiPanjang.luas());
//     console.log(persegiPanjang.keliling());

// soal 3

// const nomorRekeningSet = new Set();

//         class RekeningBank {
//             #nomorRekening;
//             #saldo;

//             constructor(nomorRekening, saldo) {
//                 if (nomorRekeningSet.has(nomorRekening)) {
//                     throw new Error('Nomor rekening sudah ada, harus unik!');
//                 }

//                 nomorRekeningSet.add(nomorRekening);
//                 this.#nomorRekening = nomorRekening;
//                 this.#saldo = saldo;
//             }

//             getNomorRekening() {
//                 return this.#nomorRekening;
//             }

//             getSaldo() {
//                 return this.#saldo;
//             }

//             setSaldo(saldoBaru) {
//                 if (saldoBaru < 0) {
//                     throw new Error('Saldo tidak bisa kurang dari 0.');
//                 }
//                 this.#saldo = saldoBaru;
//             }

//             setorUang(jumlah) {
//                 this.setSaldo(this.#saldo + jumlah);
//                 console.log(`Berhasil setor Rp.${jumlah}. Saldo sekarang: Rp.${this.#saldo}`);
//             }

//             tarikUang(jumlah) {
//                 if (jumlah > this.#saldo) {
//                     console.log("Saldo tidak mencukupi untuk penarikan!");
//                 } else {
//                     this.setSaldo(this.#saldo - jumlah);
//                     console.log(`Berhasil tarik Rp.${jumlah}. Saldo sekarang: Rp.${this.#saldo}`);
//                 }
//             }

//             tampilkanSaldo() {
//                 console.log(`Saldo di rekening ${this.#nomorRekening}: Rp.${this.#saldo}`);
//             }
//         }

//         try {
//             const rekening1 = new RekeningBank("5677356", 500000);
//             const rekening2 = new RekeningBank("7331273", 1000000);
//             const rekening3 = new RekeningBank("1556527", 750000);

//             rekening1.setorUang(200000);
//             rekening1.tarikUang(150000);
//             rekening1.tampilkanSaldo();

//             rekening2.setorUang(300000);
//             rekening2.tarikUang(500000);
//             rekening2.tampilkanSaldo();

//             rekening3.setorUang(100000);
//             rekening3.tarikUang(200000);
//             rekening3.tampilkanSaldo();

//             const rekeningDuplikat = new RekeningBank("1234567890", 200000);
//         } catch (error) {
//             console.error(error.message);
//         }

// soal 4

// const namaCabangSet = new Set();

// class Bank {
//     #namaBank;
//     #kantorCabang;

//     constructor(namaBank) {
//         this.#namaBank = namaBank;
//         this.#kantorCabang = [];
//     }

//     getNamaBank() {
//         return this.#namaBank;
//     }

//     setNamaBank(namaBaru) {
//         if (!namaBaru) {
//             throw new Error('Nama bank tidak boleh kosong.');
//         }
//         this.#namaBank = namaBaru;
//     }

//     tambahCabang(namaCabang) {
//         if (namaCabangSet.has(namaCabang)) {
//             console.info(`Kantor cabang "${namaCabang}" sudah ada!`);
//         } else {
//             this.#kantorCabang.push(namaCabang);
//             namaCabangSet.add(namaCabang);
//             console.info(`Kantor cabang "${namaCabang}" berhasil ditambahkan.`);
//         }
//     }

//     hapusCabang(namaCabang) {
//         const index = this.#kantorCabang.indexOf(namaCabang);
//         if (index !== -1) {
//             this.#kantorCabang.splice(index, 1);
//             namaCabangSet.delete(namaCabang);
//             console.info(`Kantor cabang "${namaCabang}" berhasil dihapus.`);
//         } else {
//             console.info(`Kantor cabang "${namaCabang}" tidak ditemukan.`);
//         }
//     }

//     tampilkanSemuaCabang() {
//         console.info(`Daftar Kantor Cabang ${this.#namaBank}:`);
//         if (this.#kantorCabang.length > 0) {
//             this.#kantorCabang.forEach((cabang, index) => {
//                 console.info(`${index + 1}. ${cabang}`);
//             });
//         } else {
//             console.info('Tidak ada kantor cabang.');
//         }
//     }
// }

// const bankABC = new Bank('Bank ABC');

// bankABC.tambahCabang('Cabang Cirebon');
// bankABC.tambahCabang('Cabang Malang');
// bankABC.tambahCabang('Cabang Bandung');

// bankABC.tambahCabang('Cabang Cirebon');

// bankABC.tampilkanSemuaCabang();

// bankABC.hapusCabang('Cabang Malang');

// bankABC.tampilkanSemuaCabang();

// soal 5

// class Book {
//     #title;
//     #author;
//     #year;

//     constructor(title, author, year) {
//         this.#title = title;
//         this.#author = author;
//         this.#year = year;
//     }

//     getTitle() {
//         return this.#title;
//     }

//     setTitle(newTitle) {
//         if (!newTitle) {
//             throw new Error("Judul tidak boleh kosong.");
//         }
//         this.#title = newTitle;
//     }

//     getAuthor() {
//         return this.#author;
//     }

//     setAuthor(newAuthor) {
//         if (!newAuthor) {
//             throw new Error("Penulis tidak boleh kosong.");
//         }
//         this.#author = newAuthor;
//     }

//     getYear() {
//         return this.#year;
//     }

//     setYear(newYear) {
//         if (isNaN(newYear) || newYear <= 0) {
//             throw new Error("Tahun harus berupa angka yang valid.");
//         }
//         this.#year = newYear;
//     }

//     bookDetails() {
//         console.log(`Judul: ${this.getTitle()}`);
//         console.log(`Penulis: ${this.getAuthor()}`);
//         console.log(`Tahun: ${this.getYear()}`);
//     }
// }

// class Ebook extends Book {
//     #harga;

//     constructor(title, author, year, harga) {
//         super(title, author, year);
//         this.#harga = harga;
//     }

//     getHarga() {
//         return this.#harga;
//     }

//     setHarga(newHarga) {
//         if (isNaN(newHarga) || newHarga <= 0) {
//             throw new Error("Harga harus berupa angka dan lebih besar dari 0.");
//         }
//         this.#harga = newHarga;
//     }

//     bookDetails() {
//         super.bookDetails();
//         console.info(`Harga: Rp${this.getHarga()}`);
//     }
// }

// function validateEbook(title, author, year, harga) {
//     if (!title) {
//         throw new Error("Judul tidak boleh kosong.");
//     }
//     if (isNaN(harga) || typeof harga !== "number") {
//         throw new Error("Harga harus berupa angka.");
//     }
// }

// try {
//     const title = "Belajar JavaScript"; 
//     const author = "John Doe"; 
//     const year = 2023; 
//     const harga = 150000; 

//     validateEbook(title, author, year, harga);

//     const ebook1 = new Ebook(title, author, year, harga);

//     ebook1.setTitle("Belajar JS Lanjutan");
//     ebook1.setHarga(175000);

//     ebook1.bookDetails();
// } catch (error) {
//     console.error(error.message);
// }

// soal 6

// class Employee {
//     #name;
//     #salary;

//     constructor(name, salary) {
//         this.setName(name);
//         this.setSalary(salary);
//     }

//     getName() {
//         return this.#name;
//     }

//     setName(namaBaru) {
//         if (typeof namaBaru !== 'string' || namaBaru.trim() === '') {
//             throw new Error('Nama harus berupa string dan tidak boleh kosong.');
//         }
//         this.#name = namaBaru;
//     }

//     getSalary() {
//         return this.#salary;
//     }

//     setSalary(gajiBaru) {
//         if (typeof gajiBaru !== 'number' || gajiBaru <= 0) {
//             throw new Error('Gaji harus berupa angka dan lebih dari 0.');
//         }
//         this.#salary = gajiBaru;
//     }

//     hitungGajiTahunan() {
//         return this.getSalary() * 12;
//     }

//     displayDetails() {
//         console.info(`Nama Pegawai: ${this.getName()}`);
//         console.info(`Gaji Bulanan: Rp${this.getSalary()}`);
//     }
// }

// class Manager extends Employee {
//     #departemen;

//     constructor(name, salary, departemen) {
//         super(name, salary);
//         this.setDepartemen(departemen);
//     }

//     getDepartemen() {
//         return this.#departemen;
//     }

//     setDepartemen(departemenBaru) {
//         if (typeof departemenBaru !== 'string' || departemenBaru.trim() === '') {
//             throw new Error('Departemen tidak boleh kosong.');
//         }
//         this.#departemen = departemenBaru;
//     }

//     hitungGajiTahunan() {
//         const bonus = 0.1 * this.getSalary() * 12;
//         return super.hitungGajiTahunan() + bonus;
//     }

//     displayDetails() {
//         super.displayDetails();
//         console.info(`Departemen: ${this.getDepartemen()}`);
//         console.info(`Bonus (10% dari gaji pokok): 0.1`);
//     }
// }

// try {
//     const manager1 = new Manager("Lamira Yunna", 10000000, "Marketing");
//     const manager2 = new Manager("Silmi Faris", 15500000, "Marketing");

//     manager1.displayDetails();
//     console.info(`Gaji Tahunan: Rp${manager1.hitungGajiTahunan()}\n`);

//     console.log('');

//     manager2.displayDetails();
//     console.info(`Gaji Tahunan: Rp${manager2.hitungGajiTahunan()}`);
// } catch (error) {
//     console.error(error.message);
// }

// soal 7

// class Product {
//     #idProduk;
//     #name;
//     #price;

//     constructor(idProduk, name, price) {
//         this.#idProduk = idProduk;
//         this.setName(name);
//         this.setPrice(price);
//     }

//     getName() {
//         return this.#name;
//     }

//     setName(namaBaru) {
//         if (typeof namaBaru !== 'string' || namaBaru.trim() === '') {
//             throw new Error('Nama harus berupa string dan tidak boleh kosong.');
//         }
//         this.#name = namaBaru;
//     }

//     getPrice() {
//         return this.#price;
//     }

//     setPrice(hargaBaru) {
//         if (typeof hargaBaru !== 'number' || hargaBaru <= 0) {
//             throw new Error('Harga harus berupa angka dan lebih dari 0.');
//         }
//         this.#price = hargaBaru;
//     }

//     hitungTotalHarga(kuantitas) {
//         return this.getPrice() * kuantitas;
//     }

//     tampilkanNama() {
//         console.info(`Nama Produk: ${this.getName()}`);
//     }
// }

// class ElectronicProduct extends Product {
//     #masaGaransi;

//     constructor(idProduk, name, price, masaGaransi) {
//         super(idProduk, name, price);
//         this.setMasaGaransi(masaGaransi);
//     }

//     getMasaGaransi() {
//         return this.#masaGaransi;
//     }

//     setMasaGaransi(masaGaransiBaru) {
//         if (typeof masaGaransiBaru !== 'number' || masaGaransiBaru <= 0) {
//             throw new Error('Masa garansi harus berupa angka dan lebih dari 0.');
//         }
//         this.#masaGaransi = masaGaransiBaru;
//     }

//     hitungTotalHarga(kuantitas) {
//         const totalHarga = super.hitungTotalHarga(kuantitas);
//         console.info(`Masa Garansi: ${this.getMasaGaransi()} tahun`);
//         return totalHarga;
//     }

//     tampilkanNama() {
//         super.tampilkanNama();
//         console.info(`Masa Garansi: ${this.getMasaGaransi()} tahun`);
//     }
// }

// try {
//     const laptop = new ElectronicProduct(101, 'Laptop Gaming', 15000000, 2);
//     laptop.tampilkanNama();
//     const totalHarga = laptop.hitungTotalHarga(3);
//     console.info(`Total Harga untuk 3 unit: Rp${totalHarga}`);
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     const produkValid = new Product(102, 'Produk A', 15000000);
//     console.info(`Produk valid: ${produkValid.getName()}, Harga: Rp${produkValid.getPrice()}`);
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     const produkInvalid = new Product(103, 'Produk C', 15000000);
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     const produkInvalid2 = new Product(104, 'Produk B', 15000);
// } catch (error) {
//     console.error(error.message);
// }

// soal 8

const nomorRekeningSet = new Set();
        const namaNasabahSet = new Set();

        class BankAccount {
            #nomorRekening;
            #namaNasabah;
            #saldo;

            constructor(nomorRekening, namaNasabah, saldoAwal) {
                if (nomorRekeningSet.has(nomorRekening)) {
                    throw new Error('Nomor rekening sudah digunakan!');
                }
                if (namaNasabahSet.has(namaNasabah)) {
                    throw new Error('Nama nasabah sudah digunakan!');
                }

                nomorRekeningSet.add(nomorRekening);
                namaNasabahSet.add(namaNasabah);

                this.#nomorRekening = nomorRekening;
                this.#namaNasabah = namaNasabah;
                this.#saldo = saldoAwal;
            }

            getNomorRekening() {
                return this.#nomorRekening;
            }

            getNamaNasabah() {
                return this.#namaNasabah;
            }

            getSaldo() {
                return this.#saldo;
            }

            setorUang(jumlah) {
                if (jumlah > 0) {
                    this.#saldo += jumlah;
                    console.info(`Setor berhasil. Saldo ${this.getNamaNasabah()} sekarang: Rp${this.getSaldo()}`);
                } else {
                    console.error('Jumlah setor harus lebih dari 0.');
                }
            }

            tarikUang(jumlah) {
                if (jumlah > 0 && jumlah <= this.#saldo) {
                    this.#saldo -= jumlah;
                    console.info(`Tarik berhasil. Saldo ${this.getNamaNasabah()} sekarang: Rp${this.getSaldo()}`);
                } else {
                    console.error(`Tarik gagal. Saldo tidak mencukupi atau jumlah tidak valid.=`);
                }
            }

            transferUang(jumlah, penerima) {
                if (jumlah > 0 && jumlah <= this.#saldo) {
                    this.#saldo -= jumlah;
                    penerima.#saldo += jumlah;
                    console.info(`Transfer berhasil. Rp${jumlah} telah ditransfer ke rekening ${penerima.getNamaNasabah()}.`);
                    console.info(`Saldo ${this.getNamaNasabah()} sekarang: Rp${this.getSaldo()}`);
                } else {
                    console.error(`Transfer gagal. Saldo tidak mencukupi atau jumlah tidak valid.`);
                }
            }

            cekSaldo() {
                console.info(`Saldo ${this.getNamaNasabah()}: Rp${this.getSaldo()}`);
            }
        }

        try {
            const rekening1 = new BankAccount(667567378, 'Lamira Yunna', 5000000);
            const rekening2 = new BankAccount(987568764, 'Silmi Faris', 3000000);

            rekening1.setorUang(2000000);
            rekening1.tarikUang(1000000);
            rekening1.transferUang(1500000, rekening2);

            rekening1.cekSaldo();
            rekening2.cekSaldo();

            const rekening3 = new BankAccount(66758658, 'Arif Rahman', 1000000);
        } catch (error) {
            console.error(error.message);
        }
