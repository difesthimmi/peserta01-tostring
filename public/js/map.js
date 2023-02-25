function initMap() {
            
  // membuat objek untuk titik koordinat
  var indonesia = {lat: 1.1516344, lng: 121.8351768};
  
  // membuat objek peta
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4.5,
    center: indonesia
  });

  // PULAU SUMATERA
  /*--BANK SAMPAH 1--*/
  // membuat konten untuk info bank sampah
  var contentString1 = '<h4><a href="https://goo.gl/maps/EWVdbdgfiE7ZoduW7"><b><u>Rumah Kompos Dan Bank Sampah Induk Sicanang</u></a></b></h4> \n Jl. Klp., Belawan Pulau Sicanang, Medan Kota Belawan, Kota Medan, Sumatera Utara 20411';

  // membuat objek info window
  var infowindow1 = new google.maps.InfoWindow({
    content: contentString1,
    position: new google.maps.LatLng(3.7604414622479334, 98.64917530196797)
  });
  
  // membuat marker
  var Marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(3.7604414622479334, 98.64917530196797),
    map: map,
    title: 'Rumah Kompos Dan Bank Sampah Induk Sicanang'
});
  
  // event saat marker diklik
  Marker1.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow1.open(map, Marker1);
  });
  
  /*--BANK SAMPAH 2--*/
  // membuat konten untuk info bank sampah
  var contentString2 = '<h4><a href="https://goo.gl/maps/XDR3FX6RAsLPb63x7"><b><u>Bank Sampah Kartini</u></a></b></h4>\n 2P7P+H99, Jl. Puncak Sekuning, Bukit Lama, Kec. Ilir Bar. I, Kota Palembang, Sumatera Selatan 30128';

  // membuat objek info window
  var infowindow2 = new google.maps.InfoWindow({
    content: contentString2,
    position: new google.maps.LatLng(-2.9832998495385183, 104.73690407026342)
  });
  
  // membuat marker
  var Marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(-2.9832998495385183, 104.73690407026342),
    map: map,
    title: 'Bank Sampah Kartini'
  });
  
  // event saat marker diklik
  Marker2.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow2.open(map, Marker2);
  });

  /*--BANK SAMPAH 3--*/
  // membuat konten untuk info bank sampah
  var contentString3 = '<h4><a href="https://goo.gl/maps/2vqRaCdRMTbrMwDK8"><b><u>Bank Sampah Maju Bersama Bintang Mersada</u></a></b></h4>\n Jln lae pinang dusun 1 desa, Bintang Mersada, Kec. Sidikalang, Kabupaten Dairi, Sumatera Utara 22219';

  // membuat objek info window
  var infowindow3 = new google.maps.InfoWindow({
    content: contentString3,
    position: new google.maps.LatLng(2.894515660695735, 98.4670409590612)
  });
  
  // membuat marker
  var Marker3 = new google.maps.Marker({
    position: new google.maps.LatLng(2.894515660695735, 98.4670409590612),
    map: map,
    title: 'Bank Sampah Maju Bersama Bintang Mersada'
  });
  
  // event saat marker diklik
  Marker3.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow3.open(map, Marker3);
  });
  
  /*--BANK SAMPAH 4--*/
  // membuat konten untuk info bank sampah
  var contentString4 = '<h4><a href="https://goo.gl/maps/FDE9T6R3MZiMiYt1A"><b><u>USK Waste Banks</u></a></b></h4>\n Belakang OIA Unsyiah, Jl. Tgk. Syech Abdul Rauf, Kopelma Darussalam, Syiah Kuala, Banda Aceh City, Aceh 24415';

  // membuat objek info window
  var infowindow4 = new google.maps.InfoWindow({
    content: contentString4,
    position: new google.maps.LatLng(5.567201199706073, 95.36741802446048)
  });
  
  // membuat marker
  var Marker4 = new google.maps.Marker({
    position: new google.maps.LatLng(5.567201199706073, 95.36741802446048),
    map: map,
    title: 'USK Waste Banks'
  });
  
  // event saat marker diklik
  Marker4.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow4.open(map, Marker4);
  });

  /*--BANK SAMPAH 5--*/
  // membuat konten untuk info bank sampah
  var contentString5 = '<h4><a href="https://goo.gl/maps/FDE9T6R3MZiMiYt1A"><b><u>Bank Sampah Tuan Di Bangarna</u></a></b></h4>\n Jl. Bakti No.25 D, Tengkerang Bar., Kec. Marpoyan Damai, Kota Pekanbaru, Riau 28289 ';

  // membuat objek info window
  var infowindow5 = new google.maps.InfoWindow({
    content: contentString5,
    position: new google.maps.LatLng(0.7164420028170895, 101.2853873128087)
  });
  
  // membuat marker
  var Marker5 = new google.maps.Marker({
    position: new google.maps.LatLng(0.7164420028170895, 101.2853873128087),
    map: map,
    title: 'Bank Sampah Tuan Di Bangarna'
  });
  
  // event saat marker diklik
  Marker5.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow5.open(map, Marker5);
  });

  /*--BANK SAMPAH 6--*/
  // membuat konten untuk info bank sampah
  var contentString6 = '<h4><a href="https://goo.gl/maps/9jHtGNygdx6egB6u7"><b><u>BANK SAMPAH MAPARSA</u></a></b></h4>\n 7JW6+4V3, Tagaraja, Kateman, Indragiri Hilir Regency, Riau';

  // membuat objek info window
  var infowindow6 = new google.maps.InfoWindow({
    content: contentString6,
    position: new google.maps.LatLng(0.30423428344620435, 103.61246253930116)
  });
  
  // membuat marker
  var Marker6 = new google.maps.Marker({
    position: new google.maps.LatLng(0.30423428344620435, 103.61246253930116),
    map: map,
    title: 'BANK SAMPAH MAPARSA'
  });
  
  // event saat marker diklik
  Marker6.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow6.open(map, Marker6);
  });

  /*--BANK SAMPAH 7--*/
  // membuat konten untuk info bank sampah
  var contentString7 = '<h4><a href="https://goo.gl/maps/VHnU1e2xL7KtbhnD6"><b><u>Bank Sampah SekolahAlamLampung - Kertabumi</u></a></b></h4>\n J8R4+X58, Way Huwi, Jati Agung, South Lampung Regency, Lampung 35131 ';

  // membuat objek info window
  var infowindow7 = new google.maps.InfoWindow({
    content: contentString7,
    position: new google.maps.LatLng(-5.226952770863941, 105.29463869538984)
  });
  
  // membuat marker
  var Marker7 = new google.maps.Marker({
    position: new google.maps.LatLng(-5.226952770863941, 105.29463869538984),
    map: map,
    title: 'Bank Sampah SekolahAlamLampung - Kertabumi'
  });
  
  // event saat marker diklik
  Marker7.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow7.open(map, Marker7);
  });
  
  /*--BANK SAMPAH 8--*/
  // membuat konten untuk info bank sampah
  var contentString8 = '<h4><b><a href="https://goo.gl/maps/mwfewj4uHD22PAdy5"><u>Bank Sampah Bangkitku</u></a></b></h4>\n Jl. Jend. Basuki Rahmat, Paal Lima, Kec. Kota Baru, Kota Jambi, Jambi 36129 ';

  // membuat objek info window
  var infowindow8 = new google.maps.InfoWindow({
    content: contentString8,
    position: new google.maps.LatLng(-1.6322131315678532, 103.60413363921823)
  });
  
  // membuat marker
  var Marker8 = new google.maps.Marker({
    position: new google.maps.LatLng(-1.6322131315678532, 103.60413363921823),
    map: map,
    title: 'Bank Sampah Bangkitku'
  });
  
  // event saat marker diklik
  Marker8.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow8.open(map, Marker8);
  });

  /*--BANK SAMPAH 46--*/
  // membuat konten untuk info bank sampah
  var contentString46 = '<h4><a href="https://goo.gl/maps/ZdtNMfVkMfbBbqiY6"><b><u>Bank sampah hidayah</u></a></b></h4> \n Jl. Simpang SMP 21, RT.03/RW.VI, Bandar Buat, Kec. Lubuk Kilangan, Kota Padang, Sumatera Barat 25157';

  // membuat objek info window
  var infowindow46 = new google.maps.InfoWindow({
    content: contentString46,
    position: new google.maps.LatLng(-0.3738621216215292, 100.45359983856706)
  });
  
  // membuat marker
  var Marker46 = new google.maps.Marker({
    position: new google.maps.LatLng(-0.3738621216215292, 100.45359983856706),
    map: map,
    title: 'Bank sampah hidayah'
  });
  
  // event saat marker diklik
  Marker46.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow46.open(map, Marker46);
  });

  /*--BANK SAMPAH 47--*/
  // membuat konten untuk info bank sampah
  var contentString47 = '<h4><a href="https://goo.gl/maps/RZEPwb9wbECCRWD46"><b><u>Bank Sampah Karya Bersama</u></a></b></h4> \n Jl. Teratai 1 RT.3/1 Kel, Sumber Jaya, Kec. Kp. Melayu, Kota Bengkulu, Bengkulu 38216';

  // membuat objek info window
  var infowindow47 = new google.maps.InfoWindow({
    content: contentString47,
    position: new google.maps.LatLng(-3.8601895925300713, 102.31952204715107)
  });
  
  // membuat marker
  var Marker47 = new google.maps.Marker({
    position: new google.maps.LatLng(-3.8601895925300713, 102.31952204715107),
    map: map,
    title: 'Bank Sampah Karya Bersama'
  });
  
  // event saat marker diklik
  Marker47.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow47.open(map, Marker47);
  });

  /*--BANK SAMPAH 48--*/
  // membuat konten untuk info bank sampah
  var contentString48 = '<h4><a href="https://goo.gl/maps/mS7g5SRfZiUf78Ej6"><b><u>Bank Sampah Unit Andalas Sepakat</u></a></b></h4> \n 396P+3M5, Jl. Al Furqon, Andalas, Kec. Padang Tim., Kota Padang, Sumatera Barat 25171';

  // membuat objek info window
  var infowindow48 = new google.maps.InfoWindow({
    content: contentString48,
    position: new google.maps.LatLng(-0.8495487649817496, 100.38627097957492)
  });
  
  // membuat marker
  var Marker48 = new google.maps.Marker({
    position: new google.maps.LatLng(-0.8495487649817496, 100.38627097957492),
    map: map,
    title: 'Bank Sampah Unit Andalas Sepakat'
  });
  
  // event saat marker diklik
  Marker48.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow48.open(map, Marker48);
  });

  /*--BANK SAMPAH 49--*/
  // membuat konten untuk info bank sampah
  var contentString49 = '<h4><a href="https://goo.gl/maps/KNTWLEXfqDtAAbLR7"><b><u>Bank Sampah Bumi Jaya</u></a></b></h4> \n Pelompek, Gunung Tujuh, Kerinci Regency, Jambi 37163';

  // membuat objek info window
  var infowindow49 = new google.maps.InfoWindow({
    content: contentString49,
    position: new google.maps.LatLng(-1.623527926010331, 101.32739716597895)
  });
  
  // membuat marker
  var Marker49 = new google.maps.Marker({
    position: new google.maps.LatLng(-1.623527926010331, 101.32739716597895),
    map: map,
    title: 'Bank Sampah Bumi Jaya'
  });
  
  // event saat marker diklik
  Marker49.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow49.open(map, Marker49);
  });

  /*--BANK SAMPAH 53--*/
  // membuat konten untuk info bank sampah
  var contentString53 = '<h4><a href="https://goo.gl/maps/W8sWy45hUJ3zRYJc9"><b><u>Bank Sampah Lestari (BECAk Babel)</u></a></b></h4>\n 4465+MPX, Parit Padang, Sungai Liat, Bangka Regency, Bangka Belitung Islands 33215';

  // membuat objek info window
  var infowindow53 = new google.maps.InfoWindow({
    content: contentString53,
    position: new google.maps.LatLng(-1.8666588374198598, 106.10801687266962)
  });
  
  // membuat marker
  var Marker53 = new google.maps.Marker({
    position: new google.maps.LatLng(-1.8666588374198598, 106.10801687266962),
    map: map,
    title: 'Bank Sampah Lestari (BECAk Babel)'
  });
  
  // event saat marker diklik
  Marker53.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow53.open(map, Marker53);
  });

  // PULAU JAWA
  /*--BANK SAMPAH 9--*/
  // membuat konten untuk info bank sampah
  var contentString9 = '<h4><a href="https://goo.gl/maps/M5iY2wLPwcnhPNVK7"><b><u>Bank Sampah Hijau Selaras Mandiri</u></a></b></h4>\n Kompleks Angkasa Pura Blok PQRS RT:14 RW:06 Kelurahan, RT.14/RW.11, Kebon Kosong, Kemayoran, Central Jakarta City, Jakarta 10630 ';

  // membuat objek info window
  var infowindow9 = new google.maps.InfoWindow({
    content: contentString9,
    position: new google.maps.LatLng(-6.1462415005966955, 106.8581390859503)
  });
  
  // membuat marker
  var Marker9 = new google.maps.Marker({
    position: new google.maps.LatLng(-6.1462415005966955, 106.8581390859503),
    map: map,
    title: 'Bank Sampah Hijau Selaras Mandiri'
  });
  
  // event saat marker diklik
  Marker9.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow9.open(map, Marker9);
  });

  /*--BANK SAMPAH 10--*/
  // membuat konten untuk info bank sampah
  var contentString10 = '<h4><a href="https://goo.gl/maps/3mhvoS4StyGwGx5n9"><b><u>Bank Sampah Bumi Inpirasi</u></a></b></h4>\n Jl. Cisitu Indah VI No.188, Dago, Kecamatan Coblong, Kota Bandung, Jawa Barat 40135 ';

  // membuat objek info window
  var infowindow10 = new google.maps.InfoWindow({
    content: contentString10,
    position: new google.maps.LatLng(-6.866821376341606, 107.61344571504816)
  });
  
  // membuat marker
  var Marker10 = new google.maps.Marker({
    position: new google.maps.LatLng(-6.866821376341606, 107.61344571504816),
    map: map,
    title: 'Bank Sampah Bumi Inpirasi'
  });
  
  // event saat marker diklik
  Marker10.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow10.open(map, Marker10);
  });

  /*--BANK SAMPAH 11--*/
  // membuat konten untuk info bank sampah
  var contentString11 = '<h4><a href="https://goo.gl/maps/4D7TLnYqFdHp8rML9"><b><u>Bank Sampah Jaya Makmur</u></a></b></h4>\n P487+V3F, Cigadung, Karang Tanjung, Pandeglang Regency, Banten 42251';

  // membuat objek info window
  var infowindow11 = new google.maps.InfoWindow({
    content: contentString11,
    position: new google.maps.LatLng(-6.207797050786626, 106.13187783656325)
  });
  
  // membuat marker
  var Marker11 = new google.maps.Marker({
    position: new google.maps.LatLng(-6.207797050786626, 106.13187783656325),
    map: map,
    title: 'Bank Sampah Jaya Makmur'
  });
  
  // event saat marker diklik
  Marker11.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow11.open(map, Marker11);
  });

  /*--BANK SAMPAH 12--*/
  // membuat konten untuk info bank sampah
  var contentString12 = '<h4><a href="https://goo.gl/maps/dtcJYEc3NvbWnQYS7"><b><u>Bank Sampah Resik Becik</u></a></b></h4>\n Jl. Cokrokembang No.11, Krobokan, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50141 ';

  // membuat objek info window
  var infowindow12 = new google.maps.InfoWindow({
    content: contentString12,
    position: new google.maps.LatLng(-6.954879311489396, 110.3975790306969)
  });
  
  // membuat marker
  var Marker12 = new google.maps.Marker({
    position: new google.maps.LatLng(-6.954879311489396, 110.3975790306969),
    map: map,
    title: 'Bank Sampah Resik Becik'
  });
  
  // event saat marker diklik
  Marker12.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow12.open(map, Marker12);
  });

  /*--BANK SAMPAH 13--*/
  // membuat konten untuk info bank sampah
  var contentString13 = '<h4><a href="https://goo.gl/maps/VaBjzmTbBoLM6bPx6"><b><u>Bank Sampah Gemah Ripah Bantul</u></a></b></h4>\n Jl. Urip Sumoharjo Dk, Jl. Badegan No.RT 12, Bejen, Bantul, Kec. Bantul, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55711 ';

  // membuat objek info window
  var infowindow13 = new google.maps.InfoWindow({
    content: contentString13,
    position: new google.maps.LatLng(-7.894379551199202, 110.32975496569759)
  });
  
  // membuat marker
  var Marker13 = new google.maps.Marker({
    position: new google.maps.LatLng(-7.894379551199202, 110.32975496569759),
    map: map,
    title: 'Bank Sampah Gemah Ripah Bantul'
  });
  
  // event saat marker diklik
  Marker13.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow13.open(map, Marker13);
  });

  /*--BANK SAMPAH 14--*/
  // membuat konten untuk info bank sampah
  var contentString14 = '<h4><a href="https://goo.gl/maps/u5RSdEiuTQbNswqv6"><b><u>Bank Sampah Induk Surabaya</u></a></b></h4>\n Jl. Ngagel Tim No.26, RT.009/RW.06, Pucang Sewu, Kec. Gubeng, Kota SBY, Jawa Timur 60283 ';

  // membuat objek info window
  var infowindow14 = new google.maps.InfoWindow({
    content: contentString14,
    position: new google.maps.LatLng(-7.28951216292947, 112.75062550986841)
  });
  
  // membuat marker
  var Marker14 = new google.maps.Marker({
    position: new google.maps.LatLng(-7.28951216292947, 112.75062550986841),
    map: map,
    title: 'Bank Sampah Induk Surabaya'
  });
  
  // event saat marker diklik
  Marker14.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow14.open(map, Marker14);
  });

  /*--BANK SAMPAH 15--*/
  // membuat konten untuk info bank sampah
  var contentString15 = '<h4><a href="https://goo.gl/maps/NSocE35YjZWTaAST9"><b><u>Bank Sampah Pemuda</u></a></b></h4>\n Jl. Pemuda Baru No.01, Rw. V, Rong Tengah, Kec. Sampang, Kabupaten Sampang, Jawa Timur 69216 ';

  // membuat objek info window
  var infowindow15 = new google.maps.InfoWindow({
    content: contentString15,
    position: new google.maps.LatLng(-7.168344222007759, 113.25556753833004)
  });
  
  // membuat marker
  var Marker15 = new google.maps.Marker({
    position: new google.maps.LatLng(-7.168344222007759, 113.25556753833004),
    map: map,
    title: 'Bank Sampah Pemuda'
  });
  
  // event saat marker diklik
  Marker15.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow15.open(map, Marker15);
  });

  /*--BANK SAMPAH 16--*/
  // membuat konten untuk info bank sampah
  var contentString16 = '<h4><a href="https://goo.gl/maps/2KcFGRpCk4usqNLH7"><b><u>Bank Sampah Banyuwangi</u></a></b></h4>\n Q9P7+4W4, Penganjuran, Banyuwangi Sub-District, Banyuwangi Regency, East Java 68416 ';

  // membuat objek info window
  var infowindow16 = new google.maps.InfoWindow({
    content: contentString16,
    position: new google.maps.LatLng(-8.214554975242214, 114.36484468344837)
  });
  
  // membuat marker
  var Marker16 = new google.maps.Marker({
    position: new google.maps.LatLng(-8.214554975242214, 114.36484468344837),
    map: map,
    title: 'Bank Sampah Banyuwangi'
  });
  
  // event saat marker diklik
  Marker16.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow16.open(map, Marker16);
  });

  /*--BANK SAMPAH 17--*/
  // membuat konten untuk info bank sampah
  var contentString17 = '<h4><a href="https://goo.gl/maps/yiypUkqbiaC2GEmA8"><b><u>Bank Sampah Nurul Darussalam</u></a></b></h4>\n 9G4C+QV5, Unnamed Road, Taman, Kec. Taman, Kota Madiun, Jawa Timur 63131 ';

  // membuat objek info window
  var infowindow17 = new google.maps.InfoWindow({
    content: contentString17,
    position: new google.maps.LatLng(-7.6387841026745615, 111.52188627342326)
  });
  
  // membuat marker
  var Marker17 = new google.maps.Marker({
    position: new google.maps.LatLng(-7.6387841026745615, 111.52188627342326),
    map: map,
    title: 'Bank Sampah Nurul Darussalam'
  });
  
  // event saat marker diklik
  Marker17.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow17.open(map, Marker17);
  });

  /*--BANK SAMPAH 18--*/
  // membuat konten untuk info bank sampah
  var contentString18 = '<h4><a href="https://goo.gl/maps/ki7aqVPUGTtWjVcf9"><b><u>Bank Sampah Sampurna Berkah</u></a></b></h4>\n Sidapurna Wetan, Sidapurna, Dukuhturi, Tegal Regency, Central Java 52192 ';

  // membuat objek info window
  var infowindow18 = new google.maps.InfoWindow({
    content: contentString18,
    position: new google.maps.LatLng(-6.896884478513941, 109.103047090129)
  });
  
  // membuat marker
  var Marker18 = new google.maps.Marker({
    position: new google.maps.LatLng(-6.896884478513941, 109.103047090129),
    map: map,
    title: 'Bank Sampah Sampurna Berkah'
  });
  
  // event saat marker diklik
  Marker18.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow18.open(map, Marker18);
  });

  /*--BANK SAMPAH 19--*/
  // membuat konten untuk info bank sampah
  var contentString19 = '<h4><a href="https://goo.gl/maps/KrGLBQdr1oEcsrtQ9"><b><u>Bank Sampah Berseka Tasikmalaya</u></a></b></h4>\n Kp. Pojok No. 01, Cikunir, Kec. Singaparna, Kabupaten Tasikmalaya, Jawa Barat 46418 ';

  // membuat objek info window
  var infowindow19 = new google.maps.InfoWindow({
    content: contentString19,
    position: new google.maps.LatLng(-7.338966253073286, 108.15420708343899)
  });
  
  // membuat marker
  var Marker19 = new google.maps.Marker({
    position: new google.maps.LatLng(-7.338966253073286, 108.15420708343899),
    map: map,
    title: 'Bank Sampah Berseka Tasikmalaya'
  });
  
  // event saat marker diklik
  Marker19.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow19.open(map, Marker19);
  });

  /*--BANK SAMPAH 20--*/
  // membuat konten untuk info bank sampah
  var contentString20 = '<h4><a href="https://goo.gl/maps/F3QXAwBYoVDnhBBBA"><b><u>Bank Sampah Malang</u></a></b></h4>\n Jl. S. Supriadi No.38 A, Sukun, Kec. Sukun, Kota Malang, Jawa Timur 65147 ';

  // membuat objek info window
  var infowindow20 = new google.maps.InfoWindow({
    content: contentString20,
    position: new google.maps.LatLng(-7.995232878792755, 112.61941808159791)
  });
  
  // membuat marker
  var Marker20 = new google.maps.Marker({
    position: new google.maps.LatLng(-7.995232878792755, 112.61941808159791),
    map: map,
    title: 'Bank Sampah Malang'
  });
  
  // event saat marker diklik
  Marker20.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow20.open(map, Marker20);
  });

  /*--BANK SAMPAH 21--*/
  // membuat konten untuk info bank sampah
  var contentString21 = '<h4> <a href="https://goo.gl/maps/3GqwBcYTQS9XJzjeA"><b><u>Bank Sampah SAMI</u></a></b></h4>\n 3W3G+XJG, Citamiang, Kec. Citamiang, Kota Sukabumi, Jawa Barat 43144 ';

  // membuat objek info window
  var infowindow21 = new google.maps.InfoWindow({
    content: contentString21,
    position: new google.maps.LatLng(-6.880990266793871, 106.93207100225641)
  });
  
  // membuat marker
  var Marker21 = new google.maps.Marker({
    position: new google.maps.LatLng(-6.880990266793871, 106.93207100225641),
    map: map,
    title: 'Bank Sampah SAMI'
  });
  
  // event saat marker diklik
  Marker21.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow21.open(map, Marker21);
  });

  /*--BANK SAMPAH 50--*/
  // membuat konten untuk info bank sampah
  var contentString50 = '<h4><a href="https://goo.gl/maps/jcHoKkKmA2qRpCGq5"><b><u>Bank Sampah Srayan Makarya</u></a></b></h4> \n H6RC+RP6, Bobosan, Kec. Purwokerto Utara, Kabupaten Banyumas, Jawa Tengah 53127';

  // membuat objek info window
  var infowindow50 = new google.maps.InfoWindow({
    content: contentString50,
    position: new google.maps.LatLng(-7.380923275219004, 109.22281806862055)
  });
  
  // membuat marker
  var Marker50 = new google.maps.Marker({
    position: new google.maps.LatLng(-7.380923275219004, 109.22281806862055),
    map: map,
    title: 'Bank Sampah Srayan Makarya'
  });
  
  // event saat marker diklik
  Marker50.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow50.open(map, Marker50);
  });


  // Pulau Bali, NTT dan NTB
  /*--BANK SAMPAH 22--*/
  // membuat konten untuk info bank sampah
  var contentString22 = '<h4><a href="https://goo.gl/maps/btVKK3ZERUmiBh5V9"><b><u>BANK SAMPAH “ABUKASA”</u></a></b></h4>\n Jl. Bedahulu XXI Gang Munduk, Peguyangan, Kec. Denpasar Utara, Kota Denpasar, Bali 80233';

  // membuat objek info window
  var infowindow22 = new google.maps.InfoWindow({
    content: contentString22,
    position: new google.maps.LatLng(-8.628930506382654, 115.21735954475106)
  });
  
  // membuat marker
  var Marker22 = new google.maps.Marker({
    position: new google.maps.LatLng(-8.628930506382654, 115.21735954475106),
    map: map,
    title: 'BANK SAMPAH “ABUKASA”'
  });
  
  // event saat marker diklik
  Marker22.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow22.open(map, Marker22);
  });

  /*--BANK SAMPAH 23--*/
  // membuat konten untuk info bank sampah
  var contentString23 = '<h4><a href="https://goo.gl/maps/vcgY1j3RCpLUGLut8"><b><u>Bank Sampah NTB Mandiri</u></a></b></h4>\n C4VQ+QQR, Jl. Gegerung, Gegerung, Kec. Lingsar, Kabupaten Lombok Barat, Nusa Tenggara Bar. 83351';

  // membuat objek info window
  var infowindow23 = new google.maps.InfoWindow({
    content: contentString23,
    position: new google.maps.LatLng(-8.553106763173606, 116.13914118810035)
  });
  
  // membuat marker
  var Marker23 = new google.maps.Marker({
    position: new google.maps.LatLng(-8.553106763173606, 116.13914118810035),
    map: map,
    title: 'Bank Sampah NTB Mandiri'
  });
  
  // event saat marker diklik
  Marker23.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow23.open(map, Marker23);
  });

  /*--BANK SAMPAH 24--*/
  // membuat konten untuk info bank sampah
  var contentString24 = '<h4><a href="https://goo.gl/maps/viB7DBtJk4itG5qY88"><b><u>Bank Sampah Lestari</u></a></b></h4>\n 4Q3F+HCP, Jl. Raya Benete, Benete, Kec. Maluk, Kabupaten Sumbawa Barat, Nusa Tenggara Bar. 84456 ';

  // membuat objek info window
  var infowindow24 = new google.maps.InfoWindow({
    content: contentString24,
    position: new google.maps.LatLng(-8.877460150271604, 116.77394193494014)
  });
  
  // membuat marker
  var Marker24 = new google.maps.Marker({
    position: new google.maps.LatLng(-8.877460150271604, 116.77394193494014),
    map: map,
    title: 'Bank Sampah Lestari'
  });
  
  // event saat marker diklik
  Marker24.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow24.open(map, Marker24);
  });

  /*--BANK SAMPAH 25--*/
  // membuat konten untuk info bank sampah
  var contentString25 = '<h4><a href="https://goo.gl/maps/nmHzRvNqxfK9qRpw8"><b><u>Bank Sampah The Gade Temba Nggela</u></a></b></h4>\n FF8C+W48, Dorotangga, Kec. Dompu, Kabupaten Dompu, Nusa Tenggara Bar. 84212 ';

  // membuat objek info window
  var infowindow25 = new google.maps.InfoWindow({
    content: contentString25,
    position: new google.maps.LatLng(-8.484997645044182, 118.46804678761936)
  });
  
  // membuat marker
  var Marker25 = new google.maps.Marker({
    position: new google.maps.LatLng(-8.484997645044182, 118.46804678761936),
    map: map,
    title: 'Bank Sampah The Gade Temba Nggela'
  });
  
  // event saat marker diklik
  Marker25.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow25.open(map, Marker25);
  });

  /*--BANK SAMPAH 51--*/
  // membuat konten untuk info bank sampah
  var contentString51 = '<h4><a href="https://goo.gl/maps/zDxY2Yvda555Vj9T7"><b><u>KSU Sampah Komodo</u></a></b></h4>\n GV5V+CX2, Wae Kelambu, Labuan Bajo, Komodo, Batu Cermin, Kec. Komodo, Kabupaten Manggarai Barat, Nusa Tenggara Timur';

  // membuat objek info window
  var infowindow51 = new google.maps.InfoWindow({
    content: contentString51,
    position: new google.maps.LatLng(-8.47632515781311, 119.89574789705934)
  });
  
  // membuat marker
  var Marker51 = new google.maps.Marker({
    position: new google.maps.LatLng(-8.47632515781311, 119.89574789705934),
    map: map,
    title: 'KSU Sampah Komodo'
  });
  
  // event saat marker diklik
  Marker51.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow51.open(map, Marker51);
  });

  /*--BANK SAMPAH 52--*/
  // membuat konten untuk info bank sampah
  var contentString52 = '<h4><a href="https://goo.gl/maps/kuGLRx3sS39j9guX9"><b><u>Bank Sampah Mutiara Timor</u></a></b></h4>\n Jl. S.D. Laning, Maulafa, Kec. Maulafa, Kota Kupang, Nusa Tenggara Timur 85141';

  // membuat objek info window
  var infowindow52 = new google.maps.InfoWindow({
    content: contentString52,
    position: new google.maps.LatLng(-9.9680528015211, 123.5981403990876)
  });
  
  // membuat marker
  var Marker52 = new google.maps.Marker({
    position: new google.maps.LatLng(-9.9680528015211, 123.5981403990876),
    map: map,
    title: 'Bank Sampah Mutiara Timor'
  });
  
  // event saat marker diklik
  Marker52.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow52.open(map, Marker52);
  });


  // PAPUA
  /*--BANK SAMPAH 26--*/
  // membuat konten untuk info bank sampah
  var contentString26 = '<h4><a href="https://goo.gl/maps/YVDVbJSRXnuWZ4nt7">Selengkapnya</a><b><u>Bank Sampah Kenambai Umbai</u></a></b></h4>\n CGG6+26R, Jl. Komba, Yobeh, Kec. Sentani, Kabupaten Jayapura, Papua 99352 ';

  // membuat objek info window
  var infowindow26 = new google.maps.InfoWindow({
    content: contentString26,
    position: new google.maps.LatLng(-2.4899117123892016, 140.49843727780365)
  });
  
  // membuat marker
  var Marker26 = new google.maps.Marker({
    position: new google.maps.LatLng(-2.4899117123892016, 140.49843727780365),
    map: map,
    title: 'Bank Sampah Kenambai Umbai'
  });
  
  // event saat marker diklik
  Marker26.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow26.open(map, Marker26);
  });

  /*--BANK SAMPAH 27--*/
  // membuat konten untuk info bank sampah
  var contentString27 = '<h4><a href="https://goo.gl/maps/viEsbvcW24Zk9MzY8"><b><u>Bank Sampah Mandiri Prajurit</u></a></b></h4>\n Jl. Prajurit 1 No.7, Mandala, Kec. Merauke, Kabupaten Merauke, Papua 99614 ';

  // membuat objek info window
  var infowindow27 = new google.maps.InfoWindow({
    content: contentString27,
    position: new google.maps.LatLng(-8.419189500060494, 140.40503770999976)
  });
  
  // membuat marker
  var Marker27 = new google.maps.Marker({
    position: new google.maps.LatLng(-8.419189500060494, 140.40503770999976),
    map: map,
    title: 'Bank Sampah Mandiri Prajurit'
  });
  
  // event saat marker diklik
  Marker27.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow27.open(map, Marker27);
  });

  /*--BANK SAMPAH 28--*/
  // membuat konten untuk info bank sampah
  var contentString28 = '<h4><a href="https://goo.gl/maps/8J1S3Jx3qGvFeRfj9"><b><u>Bank Sampah Sorong Raya</a></b></u></h4> \n Jl. Sorong - Makbon No.Km 12, Giwu, Distrik Sorong Timur, Kota Sorong, Papua Bar. 98416';

  // membuat objek info window
  var infowindow28 = new google.maps.InfoWindow({
    content: contentString28,
    position: new google.maps.LatLng(-0.8624585088630722, 131.33463491277692)
  });
  
  // membuat marker
  var Marker28 = new google.maps.Marker({
    position: new google.maps.LatLng(-0.8624585088630722, 131.33463491277692),
    map: map,
    title: 'Bank Sampah Sorong Raya'
  });
  
  // event saat marker diklik
  Marker28.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow28.open(map, Marker28);
  });

  // MALUKU
  /*--BANK SAMPAH 29--*/
  // membuat konten untuk info bank sampah
  var contentString29 = '<h4><a href="https://goo.gl/maps/dFQMRC7NT8hXfpBM6"><b><u>BANK SAMPAH BUMI LESTARI MALUKU</u></a></b></h4> \n 73MQ+M5F, Laha, Kec. Tlk. Ambon, Kota Ambon, Maluku';

  // membuat objek info window
  var infowindow29 = new google.maps.InfoWindow({
    content: contentString29,
    position: new google.maps.LatLng(-3.1915001903579734, 128.1187770210831)
  });
  
  // membuat marker
  var Marker29 = new google.maps.Marker({
    position: new google.maps.LatLng(-3.1915001903579734, 128.1187770210831),
    map: map,
    title: 'BANK SAMPAH BUMI LESTARI MALUKU'
  });
  
  // event saat marker diklik
  Marker29.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow29.open(map, Marker29);
  });

  /*--BANK SAMPAH 30--*/
  // membuat konten untuk info bank sampah
  var contentString30 = '<h4><a href="https://goo.gl/maps/oevCwkiHW99ydH7a6"><b><u>Bank Sampah Kota</u></a></b></h4> \n MC2W+946, Soa Sio, Tidore, Kota Tidore Kepulauan, Maluku Utara';

  // membuat objek info window
  var infowindow30 = new google.maps.InfoWindow({
    content: contentString30,
    position: new google.maps.LatLng(1.1353870382823104, 127.50354298425526)
  });
  
  // membuat marker
  var Marker30 = new google.maps.Marker({
    position: new google.maps.LatLng(1.1353870382823104, 127.50354298425526),
    map: map,
    title: 'Bank Sampah Kota'
  });
  
  // event saat marker diklik
  Marker30.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow30.open(map, Marker30);
  });

  // SULAWESI
  /*--BANK SAMPAH 31--*/
  // membuat konten untuk info bank sampah
  var contentString31 = '<h4><a href="https://goo.gl/maps/PRzxrJxhsCx9udWW8"><b><u>Bank Sampah Navoe</u></a></b></h4> \n 6VJ7+245, Taipa, Kec. Palu Utara, Kota Palu, Sulawesi Tengah 94141';

  // membuat objek info window
  var infowindow31 = new google.maps.InfoWindow({
    content: contentString31,
    position: new google.maps.LatLng(-0.2536517707678799, 119.97271376741597)
  });
  
  // membuat marker
  var Marker31 = new google.maps.Marker({
    position: new google.maps.LatLng(-0.2536517707678799, 119.97271376741597),
    map: map,
    title: 'Bank Sampah Navoe'
  });
  
  // event saat marker diklik
  Marker31.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow31.open(map, Marker31);
  });

  /*--BANK SAMPAH 32--*/
  // membuat konten untuk info bank sampah
  var contentString32 = '<h4><a href="https://goo.gl/maps/a9mdtQDR8FD6kZpj8"><b><u>Bank Sampah Pusat Kota Makassar</u></a></b></h4> \n RFP3+V8F, Jl. Toddopuli Raya, Pandang, Kec. Panakkukang, Kota Makassar, Sulawesi Selatan 90222';

  // membuat objek info window
  var infowindow32 = new google.maps.InfoWindow({
    content: contentString32,
    position: new google.maps.LatLng(-4.708792077917209, 119.48931535809699)
  });
  
  // membuat marker
  var Marker32 = new google.maps.Marker({
    position: new google.maps.LatLng(-4.708792077917209, 119.48931535809699),
    map: map,
    title: 'Bank Sampah Pusat Kota Makassar'
  });
  
  // event saat marker diklik
  Marker32.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow32.open(map, Marker32);
  });

  /*--BANK SAMPAH 33--*/
  // membuat konten untuk info bank sampah
  var contentString33 = '<h4><a href="https://goo.gl/maps/LmHJvX33KB8jbJL57"><b><u>Bank Sampah Wale Sejati</u></a></b></h4> \n Kompleks Perum Wale Sejati Blok B14, Watutumou III, Kec. Kalawat, Kabupaten Minahasa Utara, Sulawesi Utara 95378';

  // membuat objek info window
  var infowindow33 = new google.maps.InfoWindow({
    content: contentString33,
    position: new google.maps.LatLng(1.4882225974880121, 124.946908933873)
  });
  
  // membuat marker
  var Marker33 = new google.maps.Marker({
    position: new google.maps.LatLng(1.4882225974880121, 124.946908933873),
    map: map,
    title: 'Bank Sampah Wale Sejati'
  });
  
  // event saat marker diklik
  Marker33.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow33.open(map, Marker33);
  });

  /*--BANK SAMPAH 34--*/
  // membuat konten untuk info bank sampah
  var contentString34 = '<h4><a href="https://goo.gl/maps/hHKMTyTwPzMcjd1B6"><b><u>Bank Sampah Sehati</u></a></b></h4> \n 2GJJ+G4H, Jl. Bunga Seroja, Lahundape, Kec. Kendari Bar., Kota Kendari, Sulawesi Tenggara 93127';

  // membuat objek info window
  var infowindow34 = new google.maps.InfoWindow({
    content: contentString34,
    position: new google.maps.LatLng(-3.965816872596121, 122.52992597021459)
  });
  
  // membuat marker
  var Marker34 = new google.maps.Marker({
    position: new google.maps.LatLng(-3.965816872596121, 122.52992597021459),
    map: map,
    title: 'Bank Sampah Sehati'
  });
  
  // event saat marker diklik
  Marker34.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow34.open(map, Marker34);
  });

  /*--BANK SAMPAH 35--*/
  // membuat konten untuk info bank sampah
  var contentString35 = '<h4><a href="https://goo.gl/maps/XUidZ6sJ5F61NkKL9"><b><u>Bank Sampah Manakarra Keren</u></a></b></h4> \n Jl. Soekarno Hatta No.17, Karema, Kec. Mamuju, Kabupaten Mamuju, Sulawesi Barat 91512';

  // membuat objek info window
  var infowindow35 = new google.maps.InfoWindow({
    content: contentString35,
    position: new google.maps.LatLng(-2.4464608629158175, 118.90296911312723)
  });
  
  // membuat marker
  var Marker35 = new google.maps.Marker({
    position: new google.maps.LatLng(-2.4464608629158175, 118.90296911312723),
    map: map,
    title: 'Bank Sampah Manakarra Keren'
  });
  
  // event saat marker diklik
  Marker35.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow35.open(map, Marker35);
  });

  // PULAU KALIMANTAN
  /*--BANK SAMPAH 36--*/
  // membuat konten untuk info bank sampah
  var contentString36 = '<h4><a href="https://goo.gl/maps/nxkauUqtcpQ2e4dL9"><b><u>Bank Sampah Karya Bersama</u></a></b></h4> \n 2PMP+6WX, Tj. Harapan, Nunukan Sel., Kabupaten Nunukan, Kalimantan Utara 77482';

  // membuat objek info window
  var infowindow36 = new google.maps.InfoWindow({
    content: contentString36,
    position: new google.maps.LatLng(4.296582185441575, 117.73747425490052)
  });
  
  // membuat marker
  var Marker36 = new google.maps.Marker({
    position: new google.maps.LatLng(4.296582185441575, 117.73747425490052),
    map: map,
    title: 'Bank Sampah Karya Bersama'
  });
  
  // event saat marker diklik
  Marker36.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow36.open(map, Marker36);
  });

  /*--BANK SAMPAH 37--*/
  // membuat konten untuk info bank sampah
  var contentString37 = '<h4><a href="https://goo.gl/maps/kyXxdMT86dZm24X5A"><b><u>Bank Sampah Kota Hijau</u></a></b></h4> \n QW6C+9H3, Sepinggan, Kecamatan Balikpapan Selatan, Kota Balikpapan, Kalimantan Timur 76116';

  // membuat objek info window
  var infowindow37 = new google.maps.InfoWindow({
    content: contentString37,
    position: new google.maps.LatLng(-1.0167145721810842, 116.90251336607682)
  });
  
  // membuat marker
  var Marker37 = new google.maps.Marker({
    position: new google.maps.LatLng(-1.0167145721810842, 116.90251336607682),
    map: map,
    title: 'Bank Sampah Kota Hijau'
  });
  
  // event saat marker diklik
  Marker37.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow37.open(map, Marker37);
  });

  /*--BANK SAMPAH 38--*/
  // membuat konten untuk info bank sampah
  var contentString38 = '<h4><a href="https://goo.gl/maps/b77SoXTf668CN6Kg8"><b><u>Bank Sampah Induk Bessai Berinta DLH Kota Bontang</u></a></b></h4> \n Kota Bontang, Kalimantan Timur 75313';

  // membuat objek info window
  var infowindow38 = new google.maps.InfoWindow({
    content: contentString38,
    position: new google.maps.LatLng(0.4114511575489537, 117.48478872275652)
  });
  
  // membuat marker
  var Marker38 = new google.maps.Marker({
    position: new google.maps.LatLng(0.4114511575489537, 117.48478872275652),
    map: map,
    title: 'Bank Sampah Induk Bessai Berinta DLH Kota Bontang'
  });
  
  // event saat marker diklik
  Marker38.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow38.open(map, Marker38);
  });
  
  /*--BANK SAMPAH 39--*/
  // membuat konten untuk info bank sampah
  var contentString39 = '<h4><a href="https://goo.gl/maps/b77SoXTf668CN6Kg8"><b><u>Bank Sampah Induk</u></a></b></h4> \n PHCH+33C, Jl. Hksn, Alalak Utara, Kec. Banjarmasin Utara, Kota Banjarmasin, Kalimantan Selatan 70124';

  // membuat objek info window
  var infowindow39 = new google.maps.InfoWindow({
    content: contentString39,
    position: new google.maps.LatLng(-3.2717525366675044, 114.57813243276806)
  });
  
  // membuat marker
  var Marker39 = new google.maps.Marker({
    position: new google.maps.LatLng(-3.2717525366675044, 114.57813243276806),
    map: map,
    title: 'Bank Sampah Induk'
  });
  
  // event saat marker diklik
  Marker39.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow39.open(map, Marker39);
  });

  /*--BANK SAMPAH 40--*/
  // membuat konten untuk info bank sampah
  var contentString40 = '<h4><a href="https://goo.gl/maps/5mXnKGw2QzVubqQS9"><b><u>BANK SAMPAH SEKUMPUL</u></a></b></h4> \n Jalan Pendidikan Gang Berkat Tawakal 2 RT 006 RW 03 Kelurahan Sekumpul, Mentaos, Kec. Martapura, Kabupaten Banjar, Kalimantan Selatan 70614';

  // membuat objek info window
  var infowindow40 = new google.maps.InfoWindow({
    content: contentString40,
    position: new google.maps.LatLng(-3.4122500554598103, 114.85896815008687)
  });
  
  // membuat marker
  var Marker40 = new google.maps.Marker({
    position: new google.maps.LatLng(-3.4122500554598103, 114.85896815008687),
    map: map,
    title: 'BANK SAMPAH SEKUMPUL'
  });
  
  // event saat marker diklik
  Marker40.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow40.open(map, Marker40);
  });

  /*--BANK SAMPAH 41--*/
  // membuat konten untuk info bank sampah
  var contentString41 = '<h4><a href="https://goo.gl/maps/FaZUjTfEctJtvQiY6"><b><u>Bank Sampah HSS</u></a></b></h4> \n 6795+PCH, Jl. Singakarsa, Kandangan Bar., Kec. Kandangan, Kabupaten Hulu Sungai Selatan, Kalimantan Selatan 71213';

  // membuat objek info window
  var infowindow41 = new google.maps.InfoWindow({
    content: contentString41,
    position: new google.maps.LatLng(-2.727198309025973, 115.25585875664298)
  });
  
  // membuat marker
  var Marker41 = new google.maps.Marker({
    position: new google.maps.LatLng(-2.727198309025973, 115.25585875664298),
    map: map,
    title: 'Bank Sampah HSS'
  });
  
  // event saat marker diklik
  Marker41.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow41.open(map, Marker41);
  });

  /*--BANK SAMPAH 42--*/
  // membuat konten untuk info bank sampah
  var contentString42 = '<h4><a href="https://goo.gl/maps/NxWqk1RirJj2wGKq9"><b><u>TPS 3R & Bank Sampah Resik Rejo</u></a></b></h4> \n Jalan Baburak No.RT 12, Sidorejo, Kec. Arut Sel., Kabupaten Kotawaringin Barat, Kalimantan Tengah 74111';

  // membuat objek info window
  var infowindow42 = new google.maps.InfoWindow({
    content: contentString42,
    position: new google.maps.LatLng(-2.1706594822060734, 111.60559732704455)
  });
  
  // membuat marker
  var Marker42 = new google.maps.Marker({
    position: new google.maps.LatLng(-2.1706594822060734, 111.60559732704455),
    map: map,
    title: 'TPS 3R & Bank Sampah Resik Rejo'
  });
  
  // event saat marker diklik
  Marker42.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow42.open(map, Marker42);
  });

  /*--BANK SAMPAH 43--*/
  // membuat konten untuk info bank sampah
  var contentString43 = '<h4><a href="https://goo.gl/maps/LZass1juPqSWvSc8A"><b><u>Bank Sampah Ramli - kertabumi</u></a></b></h4> \n Blk. AF, Air Putih, Kec. Samarinda Ulu, Kota Samarinda, Kalimantan Timur 75243';

  // membuat objek info window
  var infowindow43 = new google.maps.InfoWindow({
    content: contentString43,
    position: new google.maps.LatLng(-0.3729504669632502, 117.10352115353857)
  });
  
  // membuat marker
  var Marker43 = new google.maps.Marker({
    position: new google.maps.LatLng(-0.3729504669632502, 117.10352115353857),
    map: map,
    title: 'Bank Sampah Ramli - kertabumi'
  });
  
  // event saat marker diklik
  Marker43.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow43.open(map, Marker43);
  });

  /*--BANK SAMPAH 44--*/
  // membuat konten untuk info bank sampah
  var contentString44 = '<h4><a href="https://goo.gl/maps/jtP52aEbo8JtMUsK8"><b><u>IBM BANK SAMPAH DAUR ULANG DAPAT UANG</u></a></b></h4> \n X899+VCQ, Jl. Gusti Hamzah, Sungai Bangkong, Kec. Pontianak Kota, Kota Pontianak, Kalimantan Barat 78244';

  // membuat objek info window
  var infowindow44 = new google.maps.InfoWindow({
    content: contentString44,
    position: new google.maps.LatLng(0.029906902304860428, 109.31964279290074)
  });
  
  // membuat marker
  var Marker44 = new google.maps.Marker({
    position: new google.maps.LatLng(0.029906902304860428, 109.31964279290074),
    map: map,
    title: 'IBM BANK SAMPAH DAUR ULANG DAPAT UANG'
  });
  
  // event saat marker diklik
  Marker44.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow44.open(map, Marker44);
  });

  /*--BANK SAMPAH 45--*/
  // membuat konten untuk info bank sampah
  var contentString45 = '<h4><a href="https://goo.gl/maps/CQsdpDA4u9LXcHJP9"><b><u>Bank Sampah Muslimah</u></a></b></h4> \n W2H5+RH3, Jl. Pramuka, Bukit Batu, Kec. Singkawang Tengah, Kota Singkawang, Kalimantan Barat 79151';

  // membuat objek info window
  var infowindow45 = new google.maps.InfoWindow({
    content: contentString45,
    position: new google.maps.LatLng(1.1043698236210908, 109.0111108648514)
  });
  
  // membuat marker
  var Marker45 = new google.maps.Marker({
    position: new google.maps.LatLng(1.1043698236210908, 109.0111108648514),
    map: map,
    title: 'Bank Sampah Muslimah'
  });
  
  // event saat marker diklik
  Marker45.addListener('click', function() {
  // tampilkan info window di atas marker
    infowindow45.open(map, Marker45);
  });

}  