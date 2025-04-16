<script>
    let labs = [
      { name: "", img: "https://media.licdn.com/dms/image/v2/D560BAQHJCjL_3y1kUQ/company-logo_200_200/company-logo_200_200/0/1734347483383/galactic_3d_logo?e=2147483647&v=beta&t=61aU_boi2QFSpzf0jfH3NHPVaq2GDNYoQFSt8sQPczM" },
      { name: "", img: "https://media.licdn.com/dms/image/v2/D560BAQE41py0zEa4VA/company-logo_200_200/company-logo_200_200/0/1684866831757?e=2147483647&v=beta&t=uqG2kFA8kbHC08D8-0_f6Zot9tgmwsYVxZfMeE-zz0g" },
      { name: "", img: "https://www.sammyfans.com/wp-content/uploads/2022/01/Samsung-Innovation-Campus.jpg" },
      {name: "", img: "https://media.licdn.com/dms/image/v2/D560BAQF2y3Yx7-VJGQ/company-logo_200_200/company-logo_200_200/0/1665363849767/samsungsemiconductor_logo?e=2147483647&v=beta&t=SWfEtNFdoYtGSbjc_kmK1wu_LlOKkwS4TLB5fRVyVow" },
      {name: "", img: "https://yt3.googleusercontent.com/2eI1TjX447QZFDe6R32K0V2mjbVMKT5mIfQR-wK5bAsxttS_7qzUDS1ojoSKeSP0NuWd6sl7qQ=s900-c-k-c0x00ffffff-no-rj" },
      {name: "",  img: "https://media.licdn.com/dms/image/v2/D560BAQHJCjL_3y1kUQ/company-logo_200_200/company-logo_200_200/0/1734347483383/galactic_3d_logo?e=2147483647&v=beta&t=61aU_boi2QFSpzf0jfH3NHPVaq2GDNYoQFSt8sQPczM" },
      { name: "", img: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" },
      { name: "",img: "https://yt3.googleusercontent.com/ytc/AIdro_mInmR-_Ufvk4rkLRy1QiOyXXF7SB6yfJHWUloZ0wl5U8c=s900-c-k-c0x00ffffff-no-rj" },
      { name: "",  img: "https://media.licdn.com/dms/image/v2/D560BAQHJCjL_3y1kUQ/company-logo_200_200/company-logo_200_200/0/1734347483383/galactic_3d_logo?e=2147483647&v=beta&t=61aU_boi2QFSpzf0jfH3NHPVaq2GDNYoQFSt8sQPczM" },
    ];
  </script>
  
  <style>
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 3rem;
      background-color: white;
      padding: 2rem;
      margin-top: 50px;
      
    }
  
    .card {
      width: 100%;
      aspect-ratio: 1 / 1;
      perspective: 1000px;
    }
  
    .card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 0.6s;
    }
  
    .card:hover .card-inner {
      transform: rotateY(180deg);
    }
  
    .card-face {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 1rem;
      backdrop-filter: blur(10px);
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.18);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color: #333;
      backface-visibility: hidden;
      overflow: hidden;
    }
  
    .card-front {
      background: rgba(255, 255, 255, 0.4);
    }
  
    .card-back {
      transform: rotateY(180deg);
      flex-direction: column;
      text-align: center;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.35);
    }
  
    .card-back img {
      width: 60%;
      border-radius: 0.5rem;
      margin-bottom: 0.5rem;
      object-fit: cover;
    }
  </style>
  
  <div class="grid">
    {#each labs as lab, index}
      <div class="card">
        <div class="card-inner">
          <div class="card-face card-front">
            SPOC {index + 1}
          </div>
          <div class="card-face card-back">
            <img src={lab.img} alt="SPOC Image" />
            <div>{lab.name}</div>
          </div>
        </div>
      </div>
    {/each}
  </div>
  