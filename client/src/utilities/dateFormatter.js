export const dateFormatter = (createdOn) => {
    const formatDate = new Date(createdOn)
    .toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"});

    return formatDate;
}