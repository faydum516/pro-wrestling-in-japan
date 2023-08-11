export default async function getYoungestChampion() {
    const res = await fetch('https://pro-wrestling-in-japan-backend.onrender.com/triple_world_champions/youngest_champion',
    { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
}