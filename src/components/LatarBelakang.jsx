import { useRef, useEffect } from "react";
import birdsImg from "../assets/birds.png";

export default function LatarBelakang() {
  return (
    <section className="relative">
      <div id="latarBelakang" className="mx-auto max-w-6xl scroll-mt-40">
      <div class="flex justify-center my-20 max-md:mx-8 z-50">
        <h1 class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-default md:text-3xl lg:text-5xl text-center ">
          Latar Belakang Acara
        </h1>
      </div>
      <img
          src={birdsImg}
          alt=""
          className="absolute h-[200px] left-[0px]  top-[0px] max-[1100px]:right- right-[300px] max-[1100px]:h-40 max-[1360px]:hidden"
      />
      <p className="mx-8 my-4 text-justify text-xl p1">
        Mahasiswa Institut Teknologi Kalimantan angkatan 2023 adalah mahasiswa
        baru Institut Teknologi Kalimantan yang terdiri dari individu yang
        berasal dari berbagai daerah dan latar belakang yang berbeda juga. Dalam
        menempuh pendidikan di Institut Teknologi Kalimantan, mahasiswa angkatan
        2023 memiliki tanggung jawab untuk mewujudkan misi dari Keluarga
        Mahasiswa Institut Teknologi Kalimantan (KM ITK). Salah satu misi
        tersebut adalah membentuk karakter SPECTA, yang tidak hanya mencakup
        aspek keilmuan, tetapi juga moral dan sosial. Berlandaskan dengan
        nilai-nilai solidaritas, kepedulian, kecerdasan, iman, dan ketakwaan.
        mahasiswa angkatan 2023 Institut Teknologi Kalimantan berkomitmen untuk
        menjadi agen perubahan yang positif di lingkungan kampus.
      </p>

      <p className="mx-8 my-4 text-justify text-xl">
        Keberagaman latar belakang, membuat mahasiswa Institut Teknologi
        Kalimantan 2023 belum memiliki kesempatan untuk saling mengenal satu
        sama lain secara mendalam. Dalam upaya mempererat hubungan
        antar-mahasiswa dan menjembatani kesenjangan komunikasi yang ada, maka
        dibuatlah sebuah kegiatan yang dimana nantinya kegiatan ini dapat
        menjadi wadah untuk mewujudkan mahasiswa yang berguna bagi masyarakat
        dan juga sebagai sarana bagi seluruh mahasiswa Institut Teknologi
        Kalimantan angkatan 2023 untuk bersosialisasi dan mengenal satu sama
        lain.
      </p>

      <p className="mx-8 my-4 text-justify text-xl">
        Untuk mewujudkan hal itu, maka kami mahasiswa Institut Teknologi
        Kalimantan Angkatan 2023 melahirkan “PESONA.” Kegiatan "PESONA"
        merupakan singkatan dari Pengabdian Mahasiswa untuk Edukasi, Sosialisasi
        dan Aksi Nyata. Tidak hanya menjadi sebuah kegiatan sosial semata,
        tetapi juga merupakan wujud nyata dari tanggung jawab sosial mahasiswa
        Institut Teknologi Kalimantan angkatan 2023 terhadap masyarakat.
        Kegiatan ini dibuat agar dapat memberikan dampak positif kepada
        masyarakat melalui edukasi, sosialisasi, dan tindakan nyata yang
        mendukung pembangunan bersama dengan melibatkan mahasiswa dari berbagai
        program studi, kegiatan ini juga diharapkan dapat memunculkan sinergi
        dan kolaborasi antara program studi.
      </p>
    </div>
    </section>
  );
}
