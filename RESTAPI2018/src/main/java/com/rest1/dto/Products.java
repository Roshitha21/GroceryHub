package com.rest1.dto;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;


@Entity
public class Products {
	@Id@GeneratedValue
	private int productId;
	private String productName;
	private double price;
	private Date uploadedDate;
	private String category;
	private int quantityAdded;
	private String units;
	private String productStatus;
	private String description;
	private String imageName;
	
	@ManyToOne
	@JoinColumn(name="custId")
	private Customer customer;
	
	@OneToMany
	private List<Cart> cart = new ArrayList<Cart>();
	
	
	public List<Cart> getCart() {
		return cart;
	}
	public void setCart(List<Cart> cart) {
		this.cart = cart;
	}
	
	public Products() {
		
	}
	
	public Products(int productId, String productName, int price, Date uploadedDate, String category,
			int quantityAdded, String productStatus, String description, String imageName,String units, Customer customer,
			List<Cart> cart) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.price = price;
		this.uploadedDate = uploadedDate;
		this.category = category;
		this.quantityAdded = quantityAdded;
		this.productStatus = productStatus;
		this.description = description;
		this.imageName = imageName;
		this.units=units;
		this.customer = customer;
		this.cart = cart;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getImageName() {
		return imageName;
	}
	public String getUnits() {
		return units;
	}
	public void setUnits(String units) {
		this.units = units;
	}
	public void setImageName(String imageName) {
		this.imageName = imageName;
	}
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price2) {
		this.price = price2;
	}
	public Date getUploadedDate() {
		return uploadedDate;
	}
	public void setUploadedDate(Date uploadedDate) {
		this.uploadedDate = uploadedDate;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public int getQuantityAdded() {
		return quantityAdded;
	}
	public void setQuantityAdded(int quantityAdded) {
		this.quantityAdded = quantityAdded;
	}
	public String getProductStatus() {
		return productStatus;
	}
	public void setProductStatus(String productStatus) {
		this.productStatus = productStatus;
	}
	@Override
	public String toString() {
		return "Products [productId=" + productId + ", productName=" + productName + ", price=" + price + ", uploadedDate=" + uploadedDate + ", category=" + category + ", quantityAdded=" + quantityAdded
				+ ", productStatus=" + productStatus + ", customer=" + customer + ", cart=" + cart + ", units=" + units + "]";
	}
	
	

}
