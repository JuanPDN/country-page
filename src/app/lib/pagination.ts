export const pagination = (totalPages: number, currentPage: number) => {
    if (totalPages <= 5) {
        return Array.from({ length: totalPages }, (_, index) => index + 1)
    }
    if(currentPage == 1){
        return[1,2,3,4,totalPages]
    }
    if(currentPage == 2){
        return[currentPage-1,currentPage,currentPage+1,totalPages]
    }

    if(currentPage == totalPages){
        return[1,totalPages-3,totalPages-2,totalPages-1,totalPages]
    }
    if(currentPage == totalPages-1){
        return[1,currentPage-2,currentPage-1,currentPage,totalPages]
    }
    return [
        1,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        totalPages,
    ];
}