export default async function getAllChampionsByReign() {
    const res = await fetch('https://pro-wrestling-in-japan-backend.onrender.com/ghc_heavyweight_champions', { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
}