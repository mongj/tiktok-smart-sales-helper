export default function ProductDetail({ params }: { params: { productId: string } }) {
    return (
      <main>
        <h1>Detail page for item {params.productId}</h1>
      </main>
    );
  }
  