import React from 'react'
import PropTypes from 'prop-types'
import styles from './BodyComponent.scss'
import CommoditiesComponent from '../CommoditiesComponent'
import CompaniesComponent from '../CompaniesComponent'
import CompaniesByCommodityComponent from '../CompaniesByCommodityComponent/CompaniesByCommodityComponent'
import ProductionComponent from '../ProductionComponent'
import RevenuesComponent from '../RevenuesComponent'
import DataComponent from '../DataComponent'
import CompanyRevenuesComparisonComponent from '../CompanyRevenuesComparisonComponent/CompanyRevenuesComparisonComponent';

// const BodyComponent = ({ data, handleClearCompanyFilters, handleCompanyFilter, reusableNestedColorScale }) => {
const BodyComponent = ({ data, reusableNestedColorScale }) => {
  const { uniqueCompanies, uniqueYears, uniqueCommodities, uniquePaymentStreams, companyPayments } = data;
  return (
    <div className="BodyComponent">
      <div className="container">
        {/* 
          <div classNames="columns">
            <div className="column is-8">
              <h2 className="title is-3">About this site</h2>
              <p>In many countries extractives data are becoming increasingly available from multiple sources: the World Bank, IMF, UNCTAD, ICTD datasets, EITI reports, national statistics and government reporting.<br />
                The Ghana extractives dashboard visualises for CSOs, journalists and policy makers the impact of extractives on the economy by providing visualizations and a macro level overview.<br />
                In the future, as more data becomes available, it could also provide granular detailed breakdowns of project activities.</p>
            </div> 
          <div>
          */}
        <CommoditiesComponent 
          uniqueCommodities={uniqueCommodities}
          uniqueYears={uniqueYears}
          uniquePaymentStreams={uniquePaymentStreams}
          companyPayments={companyPayments}
          reusableNestedColorScale={reusableNestedColorScale}
          cName={uniqueCommodities}
        />
        <CompaniesByCommodityComponent 
          uniqueCommodities={uniqueCommodities}
          uniqueYears={uniqueYears}
          uniqueCompanies={uniqueCompanies}
          uniquePaymentStreams={uniquePaymentStreams}
          companyPayments={companyPayments}
          reusableNestedColorScale={reusableNestedColorScale}
        />
        <CompaniesComponent
          uniqueCompanies={uniqueCompanies}
          uniqueYears={uniqueYears}
          uniquePaymentStreams={uniquePaymentStreams}
          companyPayments={companyPayments}
          reusableNestedColorScale={reusableNestedColorScale}
        />
        <CompanyRevenuesComparisonComponent
          uniqueCommodities={uniqueCommodities}
          uniqueCompanies={uniqueCompanies}
          uniqueYears={uniqueYears}
          uniquePaymentStreams={uniquePaymentStreams}
          companyPayments={companyPayments}
          reusableNestedColorScale={reusableNestedColorScale}
          cName={uniqueCompanies}
        />
        {/* <ProductionComponent /> */}
        {/* <RevenuesComponent /> */}
        {/* <DataComponent /> */}
        {/* <div className="columns">
          <pre>{JSON.stringify(data)}</pre>
        </div> */}
      </div>
    </div>
  )
};

BodyComponent.propTypes = {}

BodyComponent.defaultProps = {}

export default BodyComponent
