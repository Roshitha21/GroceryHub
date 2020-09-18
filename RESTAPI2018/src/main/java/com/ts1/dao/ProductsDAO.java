package com.ts1.dao;

import org.hibernate.SessionFactory;
import com.rest1.dto.Products;
import com.ts1.db.HibernateTemplate;

public class ProductsDAO {
	private SessionFactory factory = null;
	public int sellProduct(Products product) {
		System.out.println("hiii....");
		//java.util.Date utilDate = new java.sql.Date(product.getPublishedDate().getTime()); 
		return HibernateTemplate.addObject(product);
	}
	public static Products getProduct(int custId, String productName) {
		return (Products) HibernateTemplate.getObjectById(custId, productName);
	}
	
	
}

