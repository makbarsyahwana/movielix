import React, {useState, useEffect} from 'react';
import { StyledPagination } from './style';

export default function Pagination({
    currentPage,
    movieName,
    totalResults,
    fetchMoviesData
}) {
    console.log(currentPage, totalResults)

    const [pager, setPager] = useState({})

    useEffect(() => {
        setPage(currentPage)
    },[totalResults])

    function setPage(targetPage) {
        var pagerData = pager;

        if (targetPage < 1 || totalResults === undefined) {
            return;
        }

        pagerData = getPager(totalResults, targetPage, 10);

        console.log(pagerData)
        setPager(pagerData)

        fetchMoviesData(targetPage);
    }

    function getPager(totalResults, currentPage, pageSize) {

        var totalPages = Math.ceil(totalResults / pageSize);

        var startPage, 
            endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalResults - 1);

        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        return {
            totalResults: totalResults,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
    console.log(pager)
    return (
        <StyledPagination>
                <li href="#" onClick={() => setPage(1)} className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <a>&#171;</a>
                </li>
                <li href="#" onClick={() => setPage(pager.currentPage - 1)} className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <a>&#8249;</a>
                </li>
                {pager.pages && pager.pages.map((page, index) =>
                    <li href="#" onClick={() => setPage(page)} key={index} className={pager.currentPage === page ? 'active' : ''}>
                        <a>{page}</a>
                    </li>
                )}
                <li href="#" onClick={() => setPage(pager.currentPage + 1)} className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <a>&#8250;</a>
                </li>
                <li href="#" onClick={() => setPage(pager.totalPages)} className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <a>&#187;</a>
                </li>
        </StyledPagination>
    )
}