export default function Chat({ params }: { params: { productId: string } }) {
  return (
    <main>
      <h1>Chat UI for item {params.productId}</h1>
    </main>
  );
}
