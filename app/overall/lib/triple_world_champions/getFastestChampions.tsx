export default async function getFastestChampion() {
    const res = await fetch('https://pro-wrestling-in-japan-backend.onrender.com/triple_world_champions/fastest_champion',
    { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
}