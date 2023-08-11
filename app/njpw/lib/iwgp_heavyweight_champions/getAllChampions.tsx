export default async function getAllChampions() {
    const res = await fetch('https://pro-wrestling-in-japan-backend.onrender.com/iwgp_heavyweight_champions/combined_reigns', { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
}