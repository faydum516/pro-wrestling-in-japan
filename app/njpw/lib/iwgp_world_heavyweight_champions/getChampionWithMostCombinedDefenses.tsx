export default async function getChampionWithMostCombinedDefenses() {
    const res = await fetch('https://pro-wrestling-in-japan-backend.onrender.com/iwgp_world_heavyweight_champions/most_combined_defenses', 
    { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
}