import { useRouter } from "next/router";
import Link from 'next/link';
import styles from '@/styles/Home.module.css'

// // SSG場合
// export async function getStaticProps({ params }) {
//   const req = await fetch(`http://localhost:3000/${params.id}.json`)
//   const data = await req.json();

//   return {
//     props: {
//       product: data,
//     }
//   }
// }

// export async function getStaticPaths() {
//   const req = await fetch("http://localhost:3000/products.json");
//   const data = await req.json();

//   const paths = data.map((product) => {
//     return {
//       params: {
//         id: product,
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getServerSideProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    props: {
      product: data,
    },
  };
}

const Product = ({ product }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{id}のページです</h1>
        <img src={product.image} width='300' height='400' />
        <p>{product.name}</p>
        <br />
        <Link href='/products'>商品一覧へ戻る</Link>
    </main>
  </div>
  );
};

export default Product;