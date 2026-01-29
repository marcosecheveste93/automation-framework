import { test, expect } from "@playwright/test";

import {
    User,
    CreateUserRequest,
    CreateUserResponse,
    UpdateUserResponse,
} from "../models/user.model";

const apiHeaders = {
    "x-api-key": process.env.API_KEY || "",
};

test.describe("API - User tests",() =>{
    test("Get a single user by ID and verify the response structure", async ({
    request,
    }) => {
        let responseBody: {data: User};
        await test.step("Send GET request to fetch user", async () => {
            const response = await request.get(`${process.env.API_BASE_URL}/users/2`, {
                headers: apiHeaders,
        });
            expect(response.status()).toBe(200);
            responseBody = await response.json();
        });
        await test.step("Validate the response body structure and data", async () => {
            expect(responseBody.data).toEqual(
                expect.objectContaining({
                    id: 2,
                    email: expect.any(String),
                    first_name: expect.any(String),
                    last_name: expect.any(String),
                    avatar: expect.any(String),
                })
            );
        });
    });

    test("Create a new user and verify the response", async ({ request,
    }) => {
        const newUser: CreateUserRequest = {
            name: "Marcos Echeveste",
            job: "QA Software Engineer"
        };
        let responseBody: CreateUserResponse

        await test.step("Send POST request to create a new user", async () => {
            const response = await request.post(`${process.env.API_BASE_URL}/users` , {
                headers: apiHeaders,
                data: newUser,
            });
            expect(response.status()).toBe(201);
            responseBody = await response.json();
        });

        await test.step("Validate the response body structure and data", async () => {
            expect(responseBody).toEqual(
                expect.objectContaining({
                    name: newUser.name,
                    job: newUser.job,
                    id: expect.any(String),
                    createdAt: expect.any(String),
                })
            );
        });
    });

    test("Update an existing user and verify the response", async ({ request,
    }) => {
        const updatedUser: CreateUserRequest = {
            name: "Echeveste Giordano",
            job: "QA Engineer"
        };

        let responseBody: UpdateUserResponse;

        await test.step("Send PUT request to update the user", async () => {
            const response = await request.put(
                `${process.env.API_BASE_URL}/users/2`,
                {   headers: apiHeaders,
                    data: updatedUser,
                }
            );
            expect(response.status()).toBe(200);
            responseBody = await response.json();
        });
        await test.step("Validate the response body structure and data", async () => {
            expect(responseBody).toEqual(
                expect.objectContaining({
                    name: updatedUser.name,
                    job: updatedUser.job,
                    updatedAt: expect.any(String),
                })
            );
        });

        await test.step("Validate the updated date is today's date", async () => {
            const updatedAtDate = new Date(responseBody.updatedAt as string).toISOString().split("T")[0];
            const todayDate = new Date().toISOString().split("T")[0];
            expect(updatedAtDate).toBe(todayDate);
        });
    });
});