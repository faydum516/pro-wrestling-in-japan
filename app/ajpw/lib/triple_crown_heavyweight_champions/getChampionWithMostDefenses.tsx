export default async function getChampionWithMostDefenses() {
    const res = await fetch('https://pro-wrestling-in-japan-backend.onrender.com/triple_crown_heavyweight_champions/most_defenses', { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
}