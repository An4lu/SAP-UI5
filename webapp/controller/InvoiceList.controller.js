sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "../model/formatter",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function(Controller,JSONModel, formatter, Filter, FilterOperator){
  "use strict"

  return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
    banana: formatter,
    onInit: function(){
      var oViewModel = new JSONModel({
        currency: "BRL"
      });
      this.getView().setModel(oViewModel, "view")
    },
    onFilterInvoices: function(oEvent){
      //constroi uma filtro em array
      var aFilter = [];
      var sQuery = oEvent.getParameter("query");
      if(sQuery){
        aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
      }

      //vinculando o filtro
      var oList = this.byId("invoiceList");
      var oBiding = oList.getBinding("items");
      oBiding.filter(aFilter);
    }
  })
})