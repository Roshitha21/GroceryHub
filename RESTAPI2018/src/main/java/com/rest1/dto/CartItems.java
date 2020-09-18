package com.rest1.dto;

public class CartItems {
	private String productName;
	private String ImageName;
	private String Description;
	private int quantity;
	private double price;
	public CartItems(String productName, String imageName, String description, int quantity, double price) {
		super();
		this.productName = productName;
		ImageName = imageName;
		Description = description;
		this.quantity = quantity;
		this.price = price;
	}
	
	public CartItems() {
		
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getImageName() {
		return ImageName;
	}

	public void setImageName(String imageName) {
		ImageName = imageName;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}
	
}

	
