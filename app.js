const allPackages = [{
    priorityLevel: 'express',
    isFragile: false,
    weight: 2,
    to: 'Sir Harrington IV',
    trackingNumber: '1324kjs'
},
{
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Master Mercutio',
    trackingNumber: '1325sdk'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: .5,
    to: 'Mistress Ravenfeather',
    trackingNumber: 'jffd147'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 4,
    to: 'B. Robert Brown',
    trackingNumber: 'acdc145'
},
{
    priorityLevel: 'express',
    isFragile: true,
    weight: 6,
    to: 'Chancellor Wallace',
    trackingNumber: '4b2l0z'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 5,
    to: 'Sarah Sharm',
    trackingNumber: '8081baz'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: 12,
    to: 'Tae Lien',
    trackingNumber: 'suz2367'
}]

let filteredPackages = [...allPackages]

drawAllPackages(allPackages)

function drawAllPackages(allPackages){
    let packageList = ''

    for (let i = 0; i < allPackages.length; i++) {
        const package = allPackages[i]
        const packPriorityLevel = package.priorityLevel;
        const packIsFragile = package.isFragile;
        const packWeight = package.weight;
        const packTo = package.to;
        const packTrackingNum = package.trackingNumber;
        const packOrder = [i]

        packageList += `<div id="package-${packOrder}" class="card col-4">
        <p>Priority Level: ${packPriorityLevel}</p>
        <p>Fragile Package: ${packIsFragile}</p>
        <p>Package Weight: ${packWeight}</p>
        <p>Destination: ${packTo}</p>
        <p>Tracking Number: ${packTrackingNum}</p>
        </div>`

    }

    document.getElementById('package-list').innerHTML = packageList

}

function drawFragilePackages() {
    filteredPackages = filteredPackages.filter(package => package.isFragile == true)
    drawAllPackages(filteredPackages);
}

function drawExpressPackages() {
    filteredPackages = filteredPackages.filter(package => package.priorityLevel == 'express')
    drawAllPackages(filteredPackages)
}

function drawHeavyPackages() {
    filteredPackages = filteredPackages.filter(package => package.weight >= 6)
    drawAllPackages(filteredPackages)
}

function resetFilters() {
    filteredPackages = [...allPackages]
    drawAllPackages(filteredPackages)
    }
